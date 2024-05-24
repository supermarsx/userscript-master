
/*

Element manipulations

Function index
	
	* Selection
		elementSelect(selector) - Select an element with selector
	* Waiting
		elementWait(selector) - Wait for an element to be available
	* Inline styles
		elementInlineStyle(selector, style) - Apply an inline style to an element selector
		elementInlineStyleWait(selector, style) - Wait and then apply style to an element selector
		elementInlineStyleHide(selector) - Hide element through inline style
		elementInlineStyleHideWait(selector) - Wait for element and then hide through inline style
		elementInlineStyleHideAllWait(selectorArray) - Wait for array of elements and the hide them through inline style
	* Head styles
		headStyleAppend(css) - Append new style block to head
		headStyleAppendAll(cssArray) - Append new styles array blocks to head
		headStyleElementHide(selector) - Append new style block to head to hide element
		headStyleElementHideAll(selectorArray) - Append new styles block to head to hide elements array
	* Inversion styles
		htmlInvertColors() - Invert page colors
		htmlInvertColorsPlusHueRotate() - Invert and hue rotate colors
	* Dark Mode
		elementForceDarkModeMethod1(selector) - Force specific element dark mode, method 1
		elementForceDarkModeMethod1All(selectorArray) - Force element array to dark mode, method 1
		elementForceDarkModeMethod2(selector) - Force specific element dark mode, method 2
		elementForceDarkModeMethod2All(selectorArray) - Force element array to dark mode, method 2
		elementForceDarkModeMethod3(selector) - Force specific element images to dark mode, method 3
		elementForceDarkModeMethod3All(selectorArray) - Force element array to dark mode, method 3
	* Select tag
		elementSelectAddOption(selector, option, value) - Add option with value to select element
		elementSelectAddOptionWait(selector, option, value) - Add option with value but wait for select element to be available
		elementSelectAddOptionAllWait(selectOptionsArray) - Add option array with value but wait for select elements to be available (array of objects)
	* Events
		htmlWaitDomLoaded(callback) - Execute function after DOM is loaded
	* Special elements
		elementAddGoToBottomAndTop() - Add buttons to got to bottom and to go to top
	* Auxiliary functions
 		isFrame() - Is iframe?
 */

// ** Selection

/*
 * Select an element with selector
 */
function elementSelect(selector) {
	return document.querySelector(selector);
}

// ** Waiting

/*
 * Wait for an element selector to be available
 */
function elementWait(selector) {
	return new Promise(function(resolve) {
		if (elementSelect(selector)) {
			return resolve(elementSelect(selector));
		}
		
		const observer = new MutationObserver(function(mutations) {
			if (elementSelect(selector)) {
				observer.disconnect();
				return resolve(elementSelect(selector));
			}
			
			const observerOptions = {
				childList: true,
				subtree: true
			};
			
			observer.observe(document.body, observerOptions);
		});
	});
}

// ** Inline styles

/*
 * Apply an inline style to an element selector
 */
function elementInlineStyle(selector, style) {
	selector.style = style;
}

/*
 * Wait and then apply style to an element selector
 */
function elementInlineStyleWait(selector, style) {
	elementWait(selector).then(function(selector) {
		elementInlineStyle(selector, style);
	});
}

/*
 * Hide element through inline style 
 */
function elementInlineStyleHide(selector) {
	const displayStyle = 'none';
	selector.style.display = displayStyle;
}

/*
 * Wait for element and then hide through inline style
 */
function elementInlineStyleHideWait(selector) {
	elementWait(selector).then(function(selector) {
		elementInlineStyleHide(selector);
	});
}

/*
 * Wait for array of elements and the hide them through inline style
 */
function elementInlineStyleHideAllWait(selectorArray) {
	for (const selector of selectorArray) {
		elementInlineStyleHideWait(selector);
	}
}

// ** Head styles

/*
 * Append new style block to head
 */
function headStyleAppend(css) {
	var head, style;

	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

/*
 * Append new styles array blocks to head
 */
function headStyleAppendAll(cssArray) {
	for (const css of cssArray) {
		headStyleAppend(css);
	}
}

/*
 * Append new style block to head to hide element
 */
function headStyleElementHide(selector) {
	const cssHideElement = `
		${selector} {
			display: none !important;
		}
	`;

	headStyleAppend(cssHideElement);
}

/*
 * Append new styles block to head to hide elements array
 */
function headStyleElementHideAll(selectorArray) {
	var cssHideElements = ``;
	for (const selector of selectorArray) {
		const cssHideSingleElement = `
			${selector} {
				display: none !important;
			}
		`;
		cssHideElements += cssHideSingleElement;
	}

	headStyleAppend(cssHideElements);
}

// ** Inversion styles

/*
 * Invert page colors
 */
function htmlInvertColors(invertion = 1, tags = 'html, img, video, iframe') {
	const newInvertedStyle = `
		body {
			background: white;
		}

		${tags} {
			filter: invert(${invertion});
		}
	`;

	headStyleAppend(newInvertedStyle);
}

/*
 * Invert and hue rotate colors
 */
function htmlInvertColorsPlusHueRotate(invertion = 1, rotation = '180deg', tags = 'html, img, video, iframe') {
	const newInvertedAndRotatedStyle = `
		body {
			background: white;
		}

		${tags} {
			filter: invert(${invertion}) hue-rotate(${rotation});
		}
	`;

	headStyleAppend(newInvertedAndRotatedStyle);
}

// ** Dark Mode

/*
 * Force specific element dark mode, method 1
 */
function elementForceDarkModeMethod1(selector) {
	const newForceDarkMode1 = `
		${selector}, ${selector} a, ${selector} span {
			color: black !important;
		}

		${selector} {
			background: white !important;
			

		${selector} {
			filter: invert(1) hue-rotate(180deg) !important;
		}
	`;

	headStyleAppend(newForceDarkMode1);
}

/*
 * Force element array to dark mode, method 1
 */
function elementForceDarkModeMethod1All(selectorArray) {
	for (const selector of selectorArray) {
		elementForceDarkModeMethod1(selector);
	}
}

/*
 * Force specific element dark mode, method 2
 */
function elementForceDarkModeMethod2(selector) {
	const newForceDarkMode2 = `
		${selector}, ${selector} a, ${selector} span {
			color: black !important;
		}

		${selector} {
			background: white !important;
		}
	`;

	headStyleAppend(newForceDarkMode2);
}

/*
 * Force element array to dark mode, method 2
 */
function elementForceDarkModeMethod2All(selectorArray) {
	for (const selector of selectorArray) {
		elementForceDarkModeMethod2(selector);
	}
}

/*
 * Force specific element images to dark mode, method 3
 */
function elementForceDarkModeMethod3(selector) {
	const newForceDarkMode3 = `
		${selector} img {
			filter: invert(1) hue-rotate(180deg) !important;
		}
	`;

	headStyleAppend(newForceDarkMode3);
}

/*
 * Force element array to dark mode, method 3
 */
function elementForceDarkModeMethod3All(selectorArray) {
	for (const selector of selectorArray) {
		elementForceDarkModeMethod3(selector);
	}
}

// ** Select tag

/*
 * Add option with value to select element
 */
function elementSelectAddOption(selector, option, value) {
	const element = elementSelect(selector);
	const newOption = document.createElement('option');
	newOption.text = option;
	newOption.value = value;
	element.add(newOption);
}

/*
 * Add option with value but wait for select element to be available
 */
function elementSelectAddOptionWait(selector, option, value) {
	elementWait(selector).then(function() {
		elementSelectAddOption(selector, option, value);
	});
}

/*
 * Add option array with value but wait for select elements to be available (array of objects)
 * Array of objects like
 * [ {selector: 'div', option: 'name', value: 1234}, ...]
 */
function elementSelectAddOptionAllWait(selectOptionsArray) {
	for (const selectOption of selectOptionsArray) {
		elementSelectAddOptionWait(selectOption.selector, selectOption.option, selectOption.value);
	}
}

// ** Events

/*
 * Execute function after DOM is loaded
 */
function htmlWaitDomLoaded(callback) {
	document.addEventListener('DOMContentLoaded', callback);
}

// ** Cloning

/*
 * Clone selector to another selector
 */
function elementClone(sourceSelector, destinationSelector) {
	const sourceElement = elementSelect(sourceSelector);
	const targetElement = elementSelect(destinationSelector);
	const clonedContents = sourceElement.cloneNode(true);
	targetElement.appendChild(clonedContents);
}

// ** Special Elements

/*
 * Add buttons to got to bottom and to go to top
 */
function elementAddGoToBottomAndTop() {
	const buttonStyle = `
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

	const buttonHtml = document.createElement('div');
	buttonHtml.innerHTML = `
		<button onclick="document.body.scrollTop = 0;document.documentElement.scrollTop = 0;" class="fast-shortcut first-button" title="Go to top">↑</button>
		<button onclick="document.body.scrollTop = document.body.scrollHeight;document.documentElement.scrollTop = document.body.scrollHeight;" class="fast-shortcut second-button" title="Go to bottom">↓</button>
	`;

	headStyleAppend(buttonStyle);
	document.body.appendChild(buttonHtml);
}

// ** Auxiliary functions

/*
 * Is iframe?
 */
function isIframe() {
	return window !== window.parent;
}
