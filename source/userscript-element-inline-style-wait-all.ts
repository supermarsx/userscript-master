/**
 * Element inline style wait all functions
 */

import {
    elementInlineStyleHideWait,
    elementInlineStyleHideWaitAlt,
    elementInlineStyleHideWaitVar
} from "./userscript-element-inline-style-wait";

import {
    selectorAndStyleObject,
    selectorStyleAndMethodObject
} from "./userscript-element-inline-style-wait-all-types";

/**
 * Applies inline styles to multiple elements with a wait function.
 * 
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementInlineStyleWaitAll(selectorAndStyleObjectArray: Array<selectorAndStyleObject>): void | Error {
    for (const selectorObject of selectorAndStyleObjectArray) {
        const { selector, style } = selectorObject;
        try {
            elementInlineStyleHideWait(selector, style);
        } catch (error: any) {
            const errorMessage = `Failed to apply wait style to element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}

/**
 * Applies alternate inline styles to multiple elements with a wait function.
 * 
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementInlineStyleWaitAltAll(selectorAndStyleObjectArray: Array<selectorAndStyleObject>): void | Error {
    for (const selectorObject of selectorAndStyleObjectArray) {
        const { selector, style } = selectorObject;
        try {
            elementInlineStyleHideWaitAlt(selector, style);
        } catch (error: any) {
            const errorMessage = `Failed to apply alternate wait style to element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}

/**
 * Applies inline styles to multiple elements with a variable wait function.
 * 
 * @param {Array<selectorStyleAndMethodObject>} selectorStyleAndMethodObjectArray - Array of objects containing selectors, styles, and methods.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementInlineStyleWaitVarAll(selectorStyleAndMethodObjectArray: Array<selectorStyleAndMethodObject>): void | Error {
    for (const selectorObject of selectorStyleAndMethodObjectArray) {
        const { selector, style, method } = selectorObject;
        try {
            elementInlineStyleHideWaitVar(selector, style, method);
        } catch (error: any) {
            const errorMessage = `Failed to apply variable wait style to element with selector ${selector}, method ${method}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
