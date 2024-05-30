/**
 * Style element dark mode
 */

import {
    styleInjectFromText
} from "./userscript-style-injection";

/**
 * Applies dark mode styling using method 1 to the specified selector.
 * 
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */
export function styleElementDarkModeMethod1(selector: string): void {
    const styleCss = `
        ${selector}, ${selector} a, ${selector} span {
            color: black !important;
        }

        ${selector} {
            background: white !important;
        }

        ${selector} {
            filter: invert(1) hue-rotate(180deg) !important;
        }
    `;
    styleInjectFromText(styleCss);
}
export const styleElementDarkMode = styleElementDarkModeMethod1;

/**
 * Applies dark mode styling using method 2 to the specified selector.
 * 
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */
export function styleElementDarkModeMethod2(selector: string): void {
    const styleCss = `
        ${selector}, ${selector} a, ${selector} span {
            color: black !important;
        }

        ${selector} {
            background: white !important;
        }
    `;
    styleInjectFromText(styleCss);
}

/**
 * Applies dark mode styling using method 3 to the specified selector.
 * 
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */
export function styleElementDarkModeMethod3(selector: string): void {
    const styleCss = `
        ${selector} img {
            filter: invert(1) hue-rotate(180deg) !important;
        }
    `;
    styleInjectFromText(styleCss);
}
