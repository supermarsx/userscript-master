/******/ "use strict";
/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Master file, reexport everything here
 */
// Checks
__exportStar(__webpack_require__(1), exports);
// Element clone
__exportStar(__webpack_require__(2), exports);
// Element inline style
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(8), exports);
// Element select option
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
// Element selection
__exportStar(__webpack_require__(3), exports);
// Element wait
__exportStar(__webpack_require__(7), exports);
// Events
__exportStar(__webpack_require__(12), exports);
// Script injection
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);
// Special elements
__exportStar(__webpack_require__(15), exports);
// Style dark mode
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);
// Style injection
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


/**
 * Check functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkIsIframe = void 0;
/**
 * Checks if the current window is an iframe.
 *
 * @returns {boolean} True if the current window is an iframe, otherwise false.
 */
function checkIsIframe() {
    return window !== window.parent;
}
exports.checkIsIframe = checkIsIframe;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element clone functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementCloneToDestination = exports.elementClone = void 0;
const userscript_element_selection_1 = __webpack_require__(3);
/**
 * Clones an element based on the provided selector.
 *
 * @param {string} selector - The CSS selector of the element to clone.
 * @returns {Node | Error} The cloned node or an error if the element is not found.
 */
function elementClone(selector) {
    const element = (0, userscript_element_selection_1.elementSelect)(selector);
    if (element) {
        const elementClone = element.cloneNode(true);
        return elementClone;
    }
    else {
        return new Error(`Failed to clone element with selector ${selector}`);
    }
}
exports.elementClone = elementClone;
/**
 * Clones an element from the source selector and appends it to the destination selector.
 *
 * @param {string} selectorSource - The CSS selector of the element to clone.
 * @param {string} selectorDestination - The CSS selector of the destination element.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementCloneToDestination(selectorSource, selectorDestination) {
    const elementSourceClone = elementClone(selectorSource);
    if (elementSourceClone instanceof Error) {
        console.error(elementSourceClone.message);
        return new Error(`Failed to clone element: ${elementSourceClone.message}`);
    }
    const elementDestination = (0, userscript_element_selection_1.elementSelect)(selectorDestination);
    if (!elementDestination) {
        const errorMessage = `Destination element with selector ${selectorDestination} not found.`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
    try {
        elementDestination.appendChild(elementSourceClone);
    }
    catch (error) {
        const errorMessage = `Failed to append cloned element to destination: ${error.message}`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
}
exports.elementCloneToDestination = elementCloneToDestination;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


/**
 * Element selection functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementSelect = void 0;
/**
 * Selects the first DOM element that matches the given CSS selector.
 * @param {string} selector - A CSS selector string to match the desired element.
 * @returns {Element | null} The first Element within the document that matches the specified selector, or null if no matches are found.
 */
function elementSelect(selector) {
    const selected = document.querySelector(selector);
    return selected;
}
exports.elementSelect = elementSelect;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element inline style functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementInlineStyleHide = exports.elementInlineStyle = exports.elementInlineApplyStyle = void 0;
const userscript_element_selection_1 = __webpack_require__(3);
/**
 * Applies the given style to the specified element.
 *
 * @param {Element} element - The DOM element to which the style will be applied.
 * @param {string} style - The CSS style to apply.
 * @returns {Element} The element with the applied style.
 */
function elementInlineApplyStyle(element, style) {
    element.setAttribute('style', style);
    return element;
}
exports.elementInlineApplyStyle = elementInlineApplyStyle;
/**
 * Applies inline styles to an element selected by a CSS selector.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Element | Error} The styled element, or an error if the element was not found or is invalid.
 */
function elementInlineStyle(selector, style) {
    const element = (0, userscript_element_selection_1.elementSelect)(selector);
    const elementStyle = style.toString().toLowerCase().trim();
    if (element instanceof Element) {
        return elementInlineApplyStyle(element, elementStyle);
    }
    else {
        const errorMessage = `Failed to apply inline style "${style}" to element with selector "${selector}".`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
}
exports.elementInlineStyle = elementInlineStyle;
/**
 * Hides an element by applying the given style.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply to hide the element.
 * @returns {Element | Error} The hidden element, or an error if the element was not found or is invalid.
 */
function elementInlineStyleHide(selector, style = 'display: none') {
    return elementInlineStyle(selector, style);
}
exports.elementInlineStyleHide = elementInlineStyleHide;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element inline style all
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementInlineStyleHideAll = exports.elementInlineStyleAll = void 0;
const userscript_element_inline_style_1 = __webpack_require__(4);
/**
 * Applies inline styles to multiple elements based on an array of selector and style objects.
 *
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementInlineStyleAll(selectorAndStyleObjectArray) {
    for (const { selector, style } of selectorAndStyleObjectArray) {
        try {
            (0, userscript_element_inline_style_1.elementInlineStyle)(selector, style);
        }
        catch (error) {
            const errorMessage = `Failed to apply style to element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.elementInlineStyleAll = elementInlineStyleAll;
/**
 * Hides multiple elements by applying inline styles based on an array of selector and style objects.
 *
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementInlineStyleHideAll(selectorAndStyleObjectArray) {
    for (const { selector, style } of selectorAndStyleObjectArray) {
        try {
            (0, userscript_element_inline_style_1.elementInlineStyleHide)(selector, style);
        }
        catch (error) {
            const errorMessage = `Failed to hide element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.elementInlineStyleHideAll = elementInlineStyleHideAll;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element inline style wait functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementInlineStyleHideWaitVar = exports.elementInlineStyleHideWaitAlt = exports.elementInlineStyleHideWait = exports.elementInlineStyleHideWaitMain = exports.elementInlineStyleWaitVar = exports.elementInlineStyleWaitAlt = exports.elementInlineStyleWait = exports.elementInlineStyleWaitMain = void 0;
const userscript_element_inline_style_1 = __webpack_require__(4);
const userscript_element_wait_1 = __webpack_require__(7);
exports.elementInlineStyleWaitMain = elementInlineStyleWait;
/**
 * Applies inline styles to an element after waiting for it to appear.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Promise<Element | Error | null>} A promise that resolves when the style has been applied.
 */
function elementInlineStyleWait(selector, style) {
    return (0, userscript_element_wait_1.elementWait)(selector).then(function () {
        return (0, userscript_element_inline_style_1.elementInlineStyle)(selector, style);
    });
}
exports.elementInlineStyleWait = elementInlineStyleWait;
/**
 * Applies alternate inline styles to an element after waiting for it to appear.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Promise<Element | Error | null>} A promise that resolves when the style has been applied.
 */
function elementInlineStyleWaitAlt(selector, style) {
    return (0, userscript_element_wait_1.elementWaitAlt)(selector).then(function () {
        return (0, userscript_element_inline_style_1.elementInlineStyle)(selector, style);
    });
}
exports.elementInlineStyleWaitAlt = elementInlineStyleWaitAlt;
/**
 * Applies inline styles to an element after waiting for it to appear, using the specified method.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @param {string} [method='main'] - The method to use ('main' or 'alt').
 * @returns {Promise<Element | Error | null> | Error} A promise that resolves when the style has been applied, or an error if the method is invalid.
 */
function elementInlineStyleWaitVar(selector, style, method = 'main') {
    switch (method) {
        case 'main':
            return elementInlineStyleWait(selector, style);
        case 'alt':
            return elementInlineStyleWaitAlt(selector, style);
        default:
            const errorMessage = `Invalid method: ${method}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}
exports.elementInlineStyleWaitVar = elementInlineStyleWaitVar;
exports.elementInlineStyleHideWaitMain = elementInlineStyleHideWait;
/**
 * Hides an element by applying inline styles after waiting for it to appear.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @returns {Promise<Element | Error>} A promise that resolves when the style has been applied.
 */
function elementInlineStyleHideWait(selector, style = 'display: none') {
    return (0, userscript_element_wait_1.elementWait)(selector).then(function () {
        return (0, userscript_element_inline_style_1.elementInlineStyleHide)(selector, style);
    });
}
exports.elementInlineStyleHideWait = elementInlineStyleHideWait;
/**
 * Hides an element by applying alternate inline styles after waiting for it to appear.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @returns {Promise<Element | Error>} A promise that resolves when the style has been applied.
 */
function elementInlineStyleHideWaitAlt(selector, style = 'display: none') {
    return (0, userscript_element_wait_1.elementWaitAlt)(selector).then(function () {
        return (0, userscript_element_inline_style_1.elementInlineStyleHide)(selector, style);
    });
}
exports.elementInlineStyleHideWaitAlt = elementInlineStyleHideWaitAlt;
/**
 * Hides an element by applying inline styles after waiting for it to appear, using the specified method.
 *
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @param {string} [method='main'] - The method to use ('main' or 'alt').
 * @returns {Promise<void> | Error} A promise that resolves when the style has been applied, or an error if the method is invalid.
 */
function elementInlineStyleHideWaitVar(selector, style = 'display: none', method = 'main') {
    switch (method) {
        case 'main':
            return elementInlineStyleHideWait(selector, style);
        case 'alt':
            return elementInlineStyleHideWaitAlt(selector, style);
        default:
            const errorMessage = `Invalid method: ${method}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}
exports.elementInlineStyleHideWaitVar = elementInlineStyleHideWaitVar;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element wait functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementWaitAlt = exports.elementWait = void 0;
const userscript_element_selection_1 = __webpack_require__(3);
/**
 * Wait for an element to appear in the DOM.
 *
 * @param {string} selector - CSS selector of the target element.
 * @param {number} [timeout=15000] - Maximum time to wait in milliseconds (default is 15 seconds).
 * @returns {Promise<Element>} Promise that resolves with the element if found, or rejects with an error if the timeout is reached.
 */
function elementWait(selector, timeout = 15000) {
    return new Promise(function (resolve, reject) {
        const element = (0, userscript_element_selection_1.elementSelect)(selector);
        if (element) {
            return resolve(element);
        }
        const observer = new MutationObserver(function (mutations) {
            const element = (0, userscript_element_selection_1.elementSelect)(selector);
            if (element) {
                observer.disconnect();
                return resolve(element);
            }
        });
        const observerOptions = {
            childList: true,
            subtree: true
        };
        observer.observe(document.body, observerOptions);
        setTimeout(function () {
            observer.disconnect();
            reject(new Error(`Timeout after ${timeout}ms: Element ${selector} not found`));
        }, timeout);
    });
}
exports.elementWait = elementWait;
/**
 * Wait for an element to appear in the DOM by periodically checking at a specified interval.
 *
 * @param {string} selector - CSS selector of the target element.
 * @param {number} [interval=100] - Interval in milliseconds to check for the element (default is 100ms).
 * @param {number} [timeout=15000] - Maximum time to wait in milliseconds (default is 15 seconds).
 * @returns {Promise<Element>} Promise that resolves with the element if found, or rejects with an error if the timeout is reached.
 */
function elementWaitAlt(selector, interval = 100, timeout = 15000) {
    return new Promise(function (resolve, reject) {
        const elementChecker = setInterval(() => {
            const element = (0, userscript_element_selection_1.elementSelect)(selector);
            if (element) {
                clearInterval(elementChecker);
                resolve(element);
            }
        }, interval);
        setTimeout(() => {
            clearInterval(elementChecker);
            reject(new Error(`Timeout after ${timeout}ms: Element ${selector} not found`));
        }, timeout);
    });
}
exports.elementWaitAlt = elementWaitAlt;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element inline style wait all functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementInlineStyleWaitVarAll = exports.elementInlineStyleWaitAltAll = exports.elementInlineStyleWaitAll = void 0;
const userscript_element_inline_style_wait_1 = __webpack_require__(6);
/**
 * Applies inline styles to multiple elements with a wait function.
 *
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementInlineStyleWaitAll(selectorAndStyleObjectArray) {
    for (const selectorObject of selectorAndStyleObjectArray) {
        const { selector, style } = selectorObject;
        try {
            (0, userscript_element_inline_style_wait_1.elementInlineStyleHideWait)(selector, style);
        }
        catch (error) {
            const errorMessage = `Failed to apply wait style to element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.elementInlineStyleWaitAll = elementInlineStyleWaitAll;
/**
 * Applies alternate inline styles to multiple elements with a wait function.
 *
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementInlineStyleWaitAltAll(selectorAndStyleObjectArray) {
    for (const selectorObject of selectorAndStyleObjectArray) {
        const { selector, style } = selectorObject;
        try {
            (0, userscript_element_inline_style_wait_1.elementInlineStyleHideWaitAlt)(selector, style);
        }
        catch (error) {
            const errorMessage = `Failed to apply alternate wait style to element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.elementInlineStyleWaitAltAll = elementInlineStyleWaitAltAll;
/**
 * Applies inline styles to multiple elements with a variable wait function.
 *
 * @param {Array<selectorStyleAndMethodObject>} selectorStyleAndMethodObjectArray - Array of objects containing selectors, styles, and methods.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementInlineStyleWaitVarAll(selectorStyleAndMethodObjectArray) {
    for (const selectorObject of selectorStyleAndMethodObjectArray) {
        const { selector, style, method } = selectorObject;
        try {
            (0, userscript_element_inline_style_wait_1.elementInlineStyleHideWaitVar)(selector, style, method);
        }
        catch (error) {
            const errorMessage = `Failed to apply variable wait style to element with selector ${selector}, method ${method}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.elementInlineStyleWaitVarAll = elementInlineStyleWaitVarAll;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element select option
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementSelectOptionAdd = void 0;
const userscript_element_selection_1 = __webpack_require__(3);
/**
 * Adds an option to a select element.
 *
 * @param {string} selector - The CSS selector of the select element.
 * @param {string} optionText - The text of the option to add.
 * @param {string} optionValue - The value of the option to add.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementSelectOptionAdd(selector, optionText, optionValue) {
    const element = (0, userscript_element_selection_1.elementSelect)(selector);
    if (!element) {
        const errorMessage = `Failed to find select element with selector "${selector}".`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
    const option = document.createElement('option');
    option.text = optionText;
    option.value = optionValue;
    try {
        element.add(option);
    }
    catch (error) {
        const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to select element: ${error.message}`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
}
exports.elementSelectOptionAdd = elementSelectOptionAdd;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element select option wait
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementSelectOptionAddWaitAlt = exports.elementSelectOptionAddWait = void 0;
const userscript_element_select_option_1 = __webpack_require__(9);
const userscript_element_wait_1 = __webpack_require__(7);
/**
 * Adds an option to a select element after waiting for it to appear.
 *
 * @param {string} selector - The CSS selector of the select element.
 * @param {string} optionText - The text of the option to add.
 * @param {string} optionValue - The value of the option to add.
 * @returns {Promise<void | Error>} A promise that resolves when the option has been added.
 */
function elementSelectOptionAddWait(selector, optionText, optionValue) {
    return (0, userscript_element_wait_1.elementWait)(selector).then(function () {
        try {
            (0, userscript_element_select_option_1.elementSelectOptionAdd)(selector, optionText, optionValue);
        }
        catch (error) {
            const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    });
}
exports.elementSelectOptionAddWait = elementSelectOptionAddWait;
/**
 * Adds an option to a select element after waiting for it to appear. alternate method
 *
 * @param {string} selector - The CSS selector of the select element.
 * @param {string} optionText - The text of the option to add.
 * @param {string} optionValue - The value of the option to add.
 * @returns {Promise<void | Error>} A promise that resolves when the option has been added.
 */
function elementSelectOptionAddWaitAlt(selector, optionText, optionValue) {
    return (0, userscript_element_wait_1.elementWaitAlt)(selector).then(function () {
        try {
            (0, userscript_element_select_option_1.elementSelectOptionAdd)(selector, optionText, optionValue);
        }
        catch (error) {
            const errorMessage = `Failed to add alternate option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    });
}
exports.elementSelectOptionAddWaitAlt = elementSelectOptionAddWaitAlt;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Element select option wait all
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementSelectOptionAddWaitAltAll = exports.elementSelectOptionAddWaitAll = void 0;
const userscript_element_select_option_wait_1 = __webpack_require__(10);
/**
 * Adds options to select elements after waiting for them to appear.
 *
 * @param {Array<selectorOptionTextAndValueObject>} selectorOptionTextAndValueObjectArray - Array of objects containing selectors, option text, and option value.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementSelectOptionAddWaitAll(selectorOptionTextAndValueObjectArray) {
    for (const { selector, optionText, optionValue } of selectorOptionTextAndValueObjectArray) {
        try {
            (0, userscript_element_select_option_wait_1.elementSelectOptionAddWait)(selector, optionText, optionValue);
        }
        catch (error) {
            const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.elementSelectOptionAddWaitAll = elementSelectOptionAddWaitAll;
/**
 * Adds options to select elements after waiting for them to appear. alternate method
 *
 * @param {Array<selectorOptionTextAndValueObject>} selectorOptionTextAndValueObjectArray - Array of objects containing selectors, option text, and option value.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function elementSelectOptionAddWaitAltAll(selectorOptionTextAndValueObjectArray) {
    for (const { selector, optionText, optionValue } of selectorOptionTextAndValueObjectArray) {
        try {
            (0, userscript_element_select_option_wait_1.elementSelectOptionAddWaitAlt)(selector, optionText, optionValue);
        }
        catch (error) {
            const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.elementSelectOptionAddWaitAltAll = elementSelectOptionAddWaitAltAll;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


/**
 * Event functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventWaitDomLoaded = void 0;
/**
 * Wait for the DOM content to be loaded before executing the callback.
 *
 * @param {Function} callback - The callback function to execute once the DOM content is loaded.
 * @returns {void}
 */
function eventWaitDomLoaded(callback) {
    document.addEventListener('DOMContentLoaded', callback);
}
exports.eventWaitDomLoaded = eventWaitDomLoaded;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


/**
 * Script injection functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scriptInjectFromText = exports.scriptInjectFromUrl = void 0;
/**
 * Injects a script from a URL into the specified location in the DOM.
 *
 * @param {string} url - The URL of the script to inject.
 * @param {string} [location='head'] - The location to inject the script ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function scriptInjectFromUrl(url, location = 'head') {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = url;
    switch (location) {
        case 'head':
            document.head.appendChild(scriptElement);
            break;
        case 'body':
            document.body.appendChild(scriptElement);
            break;
        default:
            const errorMessage = `Failed to inject script from url: ${url} due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}
exports.scriptInjectFromUrl = scriptInjectFromUrl;
/**
 * Injects a script from text into the specified location in the DOM.
 *
 * @param {string} script - The script content to inject.
 * @param {string} [location='head'] - The location to inject the script ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function scriptInjectFromText(script, location = 'head') {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.innerHTML = script;
    switch (location) {
        case 'head':
            document.head.appendChild(scriptElement);
            break;
        case 'body':
            document.body.appendChild(scriptElement);
            break;
        default:
            const errorMessage = `Failed to inject script from text: ${script} due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}
exports.scriptInjectFromText = scriptInjectFromText;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Script injection all functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scriptInjectFromTextAll = exports.scriptInjectFromUrlAll = void 0;
const userscript_script_injection_1 = __webpack_require__(13);
/**
 * Injects scripts from URLs into specified locations for an array of URL and location objects.
 *
 * @param {Array<urlAndLocationObject>} urlAndLocationObjectArray - Array of objects containing URLs and locations.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function scriptInjectFromUrlAll(urlAndLocationObjectArray) {
    for (const { url, location } of urlAndLocationObjectArray) {
        try {
            (0, userscript_script_injection_1.scriptInjectFromUrl)(url, location);
        }
        catch (error) {
            const errorMessage = `Failed to inject script from URL (${url}) to location (${location}): ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.scriptInjectFromUrlAll = scriptInjectFromUrlAll;
/**
 * Injects scripts from text into specified locations for an array of script and location objects.
 *
 * @param {Array<scriptAndLocationObject>} scriptAndLocationObjectArray - Array of objects containing scripts and locations.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function scriptInjectFromTextAll(scriptAndLocationObjectArray) {
    for (const { script, location } of scriptAndLocationObjectArray) {
        try {
            (0, userscript_script_injection_1.scriptInjectFromText)(script, location);
        }
        catch (error) {
            const errorMessage = `Failed to inject script to location (${location}): ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
exports.scriptInjectFromTextAll = scriptInjectFromTextAll;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Special elements
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.specialElementAddGoToBottomAndTop = void 0;
const userscript_style_injection_1 = __webpack_require__(16);
/**
 * Adds "Go to Bottom" and "Go to Top" buttons to the webpage with corresponding styles.
 *
 * @returns {void}
 */
function specialElementAddGoToBottomAndTop() {
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
    (0, userscript_style_injection_1.styleInjectFromText)(styleCss);
    document.body.appendChild(button);
}
exports.specialElementAddGoToBottomAndTop = specialElementAddGoToBottomAndTop;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


/**
 * Style injection functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleInjectElementInvisible = exports.styleInjectElementTransparent = exports.styleInjectElementHide = exports.styleInjectFromText = exports.styleInjectFromUrl = void 0;
/**
 * Injects a CSS stylesheet from a URL into the specified location in the DOM.
 *
 * @param {string} url - The URL of the CSS file.
 * @param {string} [location='head'] - The location to inject the CSS ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function styleInjectFromUrl(url, location = 'head') {
    const styleElement = document.createElement('link');
    styleElement.rel = 'stylesheet';
    styleElement.type = 'text/css';
    styleElement.href = url;
    switch (location) {
        case 'head':
            document.head.appendChild(styleElement);
            break;
        case 'body':
            document.body.appendChild(styleElement);
            break;
        default:
            const errorMessage = `Failed to inject style from url: ${url} due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}
exports.styleInjectFromUrl = styleInjectFromUrl;
/**
 * Injects CSS styles from text into the specified location in the DOM.
 *
 * @param {string} styleCss - The CSS text to inject.
 * @param {string} [location='head'] - The location to inject the CSS ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
function styleInjectFromText(styleCss, location = 'head') {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = styleCss;
    switch (location) {
        case 'head':
            document.head.appendChild(styleElement);
            break;
        case 'body':
            document.body.appendChild(styleElement);
            break;
        default:
            const errorMessage = `Failed to inject style due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}
exports.styleInjectFromText = styleInjectFromText;
/**
 * Hides elements specified by a CSS selector.
 *
 * @param {string} selector - The CSS selector of the elements to hide.
 * @returns {void}
 */
function styleInjectElementHide(selector) {
    const styleCss = `
        ${selector} {
            display: none !important;
        }
    `;
    styleInjectFromText(styleCss);
}
exports.styleInjectElementHide = styleInjectElementHide;
/**
 * Makes elements specified by a CSS selector transparent.
 *
 * @param {string} selector - The CSS selector of the elements to make transparent.
 * @returns {void}
 */
function styleInjectElementTransparent(selector) {
    const styleCss = `
        ${selector} {
            opacity: 0 !important;
        }
    `;
    styleInjectFromText(styleCss);
}
exports.styleInjectElementTransparent = styleInjectElementTransparent;
/**
 * Makes elements specified by a CSS selector invisible.
 *
 * @param {string} selector - The CSS selector of the elements to make invisible.
 * @returns {void}
 */
function styleInjectElementInvisible(selector) {
    const styleCss = `
        ${selector} {
            visibility: hidden !important;
        }
    `;
    styleInjectFromText(styleCss);
}
exports.styleInjectElementInvisible = styleInjectElementInvisible;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 *  Style dark mode
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleDarkModeInvertColorsAndHueRotate = exports.styleDarkModeInvertColors = void 0;
const userscript_style_injection_1 = __webpack_require__(16);
/**
 * Applies a CSS filter to invert colors for the specified tags.
 *
 * @param {number} [inversion=1] - The amount of inversion to apply (0 to 1).
 * @param {string} [tags='html, img, video, iframe'] - The tags to apply the filter to.
 * @param {string} [additionalfilters=''] - Additional CSS filters to apply.
 * @returns {void}
 */
function styleDarkModeInvertColors(inversion = 1, tags = 'html, img, video, iframe', additionalfilters = '') {
    const styleCss = `
        body {
            background: white;
        }

        ${tags} {
            filter: invert(${inversion}) ${additionalfilters}
        }
    `;
    (0, userscript_style_injection_1.styleInjectFromText)(styleCss);
}
exports.styleDarkModeInvertColors = styleDarkModeInvertColors;
/**
 * Applies a CSS filter to invert colors and rotate hues for the specified tags.
 *
 * @param {number} [inversion=1] - The amount of inversion to apply (0 to 1).
 * @param {number} [rotation=180] - The degree of hue rotation to apply.
 * @param {string} [tags='html, img, video, iframe'] - The tags to apply the filter to.
 * @param {string} [additionalfilters=''] - Additional CSS filters to apply.
 * @returns {void}
 */
function styleDarkModeInvertColorsAndHueRotate(inversion = 1, rotation = 180, tags = 'html, img, video, iframe', additionalfilters = '') {
    const styleCss = `
        body {
            background: white;
        }

        ${tags} {
            filter: invert(${inversion}) hue-rotate(${rotation}deg) ${additionalfilters};
        }
    `;
    (0, userscript_style_injection_1.styleInjectFromText)(styleCss);
}
exports.styleDarkModeInvertColorsAndHueRotate = styleDarkModeInvertColorsAndHueRotate;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Style element dark mode
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleElementDarkModeMethod3 = exports.styleElementDarkModeMethod2 = exports.styleElementDarkMode = exports.styleElementDarkModeMethod1 = void 0;
const userscript_style_injection_1 = __webpack_require__(16);
/**
 * Applies dark mode styling using method 1 to the specified selector.
 *
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */
function styleElementDarkModeMethod1(selector) {
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
    (0, userscript_style_injection_1.styleInjectFromText)(styleCss);
}
exports.styleElementDarkModeMethod1 = styleElementDarkModeMethod1;
exports.styleElementDarkMode = styleElementDarkModeMethod1;
/**
 * Applies dark mode styling using method 2 to the specified selector.
 *
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */
function styleElementDarkModeMethod2(selector) {
    const styleCss = `
        ${selector}, ${selector} a, ${selector} span {
            color: black !important;
        }

        ${selector} {
            background: white !important;
        }
    `;
    (0, userscript_style_injection_1.styleInjectFromText)(styleCss);
}
exports.styleElementDarkModeMethod2 = styleElementDarkModeMethod2;
/**
 * Applies dark mode styling using method 3 to the specified selector.
 *
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */
function styleElementDarkModeMethod3(selector) {
    const styleCss = `
        ${selector} img {
            filter: invert(1) hue-rotate(180deg) !important;
        }
    `;
    (0, userscript_style_injection_1.styleInjectFromText)(styleCss);
}
exports.styleElementDarkModeMethod3 = styleElementDarkModeMethod3;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Style element dark mode all
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleElementDarkModeMethod3All = exports.styleElementDarkModeMethod2All = exports.styleElementDarkModeMethod1All = void 0;
const userscript_style_element_darkmode_1 = __webpack_require__(18);
/**
 * Applies dark mode styling using method 1 to all elements matching the selectors in the array.
 *
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
function styleElementDarkModeMethod1All(selectorArray) {
    for (const selector of selectorArray) {
        try {
            (0, userscript_style_element_darkmode_1.styleElementDarkModeMethod1)(selector);
        }
        catch (error) {
            console.error(`Failed to apply dark mode method 1 to element with selector "${selector}": ${error.message}`);
        }
    }
}
exports.styleElementDarkModeMethod1All = styleElementDarkModeMethod1All;
/**
 * Applies dark mode styling using method 2 to all elements matching the selectors in the array.
 *
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
function styleElementDarkModeMethod2All(selectorArray) {
    for (const selector of selectorArray) {
        try {
            (0, userscript_style_element_darkmode_1.styleElementDarkModeMethod2)(selector);
        }
        catch (error) {
            console.error(`Failed to apply dark mode method 2 to element with selector "${selector}": ${error.message}`);
        }
    }
}
exports.styleElementDarkModeMethod2All = styleElementDarkModeMethod2All;
/**
 * Applies dark mode styling using method 3 to all elements matching the selectors in the array.
 *
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
function styleElementDarkModeMethod3All(selectorArray) {
    for (const selector of selectorArray) {
        try {
            (0, userscript_style_element_darkmode_1.styleElementDarkModeMethod3)(selector);
        }
        catch (error) {
            console.error(`Failed to apply dark mode method 3 to element with selector "${selector}": ${error.message}`);
        }
    }
}
exports.styleElementDarkModeMethod3All = styleElementDarkModeMethod3All;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Style injection all functions
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleInjectElementInvisibleAll = exports.styleInjectElementTransparentAll = exports.styleInjectElementHideAll = exports.styleInjectFromTextAll = exports.styleInjectFromUrlAll = void 0;
const userscript_style_injection_1 = __webpack_require__(16);
/**
 * Injects CSS styles from URLs into specified locations for an array of URL and location objects.
 *
 * @param {Array<styleUrlAndLocationObject>} styleUrlAndLocationObjectArray - Array of objects containing URLs and locations.
 * @returns {void}
 */
function styleInjectFromUrlAll(styleUrlAndLocationObjectArray) {
    for (const styleObject of styleUrlAndLocationObjectArray) {
        const { url, location } = styleObject;
        (0, userscript_style_injection_1.styleInjectFromUrl)(url, location);
    }
}
exports.styleInjectFromUrlAll = styleInjectFromUrlAll;
/**
 * Injects CSS styles from text into specified locations for an array of CSS and location objects.
 *
 * @param {Array<styleCssAndLocationObject>} styleCssAndLocationObjectArray - Array of objects containing CSS text and locations.
 * @returns {void}
 */
function styleInjectFromTextAll(styleCssAndLocationObjectArray) {
    for (const styleObject of styleCssAndLocationObjectArray) {
        const { css, location } = styleObject;
        (0, userscript_style_injection_1.styleInjectFromText)(css, location);
    }
}
exports.styleInjectFromTextAll = styleInjectFromTextAll;
/**
 * Hides elements specified by an array of CSS selectors.
 *
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
function styleInjectElementHideAll(selectorArray) {
    for (const selector of selectorArray) {
        (0, userscript_style_injection_1.styleInjectElementHide)(selector);
    }
}
exports.styleInjectElementHideAll = styleInjectElementHideAll;
/**
 * Makes elements specified by an array of CSS selectors transparent.
 *
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
function styleInjectElementTransparentAll(selectorArray) {
    for (const selector of selectorArray) {
        (0, userscript_style_injection_1.styleInjectElementTransparent)(selector);
    }
}
exports.styleInjectElementTransparentAll = styleInjectElementTransparentAll;
/**
 * Makes elements specified by an array of CSS selectors invisible.
 *
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
function styleInjectElementInvisibleAll(selectorArray) {
    for (const selector of selectorArray) {
        (0, userscript_style_injection_1.styleInjectElementInvisible)(selector);
    }
}
exports.styleInjectElementInvisibleAll = styleInjectElementInvisibleAll;


/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__(0);
/******/ window.master = __webpack_exports__;
/******/ 
