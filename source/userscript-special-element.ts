/**
 * Special elements
 */

import {
	styleInjectFromText
} from "./userscript-style-injection";

/**
 * Adds "Go to Bottom" and "Go to Top" buttons to the webpage with corresponding styles.
 * 
 * @returns {void}
 */
export function specialElementAddGoToBottomAndTop(): void {
	const styleCss = `
    .fast-shortcut {
        width: 40px;
        height: 40px;
        display: block;
        position: fixed;
        bottom: 20px;
        z-index: 99;
        font-size: 25px;
        outline: none;
        background-color: white;
        color: white;
        cursor: pointer;
        padding: 2px;
    }

    .fast-shortcut.first-button {
        right: 30px;
    }

    .fast-shortcut.second-button {
        right: 75px;
    }
    `;

	const button = document.createElement('div');
	button.innerHTML = `
        <button onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;" class="fast-shortcut first-button" title="Go to top">↑</button>
        <button onclick="document.body.scrollTop = document.body.scrollHeight; document.documentElement.scrollTop = document.body.scrollHeight;" class="fast-shortcut second-button" title="Go to bottom">↓</button>
    `;

	styleInjectFromText(styleCss);
	document.body.appendChild(button);
}