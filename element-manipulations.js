
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
		elementForceDarkModeMethod2(selector) - Force specific element dark mode, method 2
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
function htmlInvertColors() {
	const newInvertedStyle = `
		body {
			background: white;
		}

		html, img, video, iframe {
			filter: invert(1);
		}
	`;

	headStyleAppend(newInvertedStyle);
}

/*
 * Invert and hue rotate colors
 */
function htmlInvertColorsPlusHueRotate() {
	const newInvertedAndRotatedStyle = `
		body {
			background: white;
		}

		html, img, video, iframe {
			filter: invert(1) hue-rotate(180deg);
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
		${selector} {
			background: white !important;
			color: black !important;
		}

		${selector} {
			filter: invert(1) hue-rotate(180deg) !important;
		}
	`;

	headStyleAppend(newForceDarkMode1);
}

/*
 * Force specific element dark mode, method 2
 */
function elementForceDarkModeMethod2(selector) {
	const newForceDarkMode2 = `
		${selector} {
			background: white !important;
			color: black !important;
		}
	`;

	headStyleAppend(newForceDarkMode2);
}