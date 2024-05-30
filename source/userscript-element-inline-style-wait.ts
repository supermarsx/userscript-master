/**
 * Element inline style wait functions
 */

import {
    elementInlineStyle,
    elementInlineStyleHide
} from "./userscript-element-inline-style";

import {
    elementWait,
    elementWaitAlt
} from "./userscript-element-wait";

export const elementInlineStyleWaitMain = elementInlineStyleWait;

/**
 * Applies inline styles to an element after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Promise<Element | Error | null>} A promise that resolves when the style has been applied.
 */
export function elementInlineStyleWait(selector: string, style: string): Promise<Element | Error | null> {
    return elementWait(selector).then(function () {
        return elementInlineStyle(selector, style);
    });
}

/**
 * Applies alternate inline styles to an element after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Promise<Element | Error | null>} A promise that resolves when the style has been applied.
 */
export function elementInlineStyleWaitAlt(selector: string, style: string): Promise<Element | Error | null> {
    return elementWaitAlt(selector).then(function () {
        return elementInlineStyle(selector, style);
    });
}

/**
 * Applies inline styles to an element after waiting for it to appear, using the specified method.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @param {string} [method='main'] - The method to use ('main' or 'alt').
 * @returns {Promise<Element | Error | null> | Error} A promise that resolves when the style has been applied, or an error if the method is invalid.
 */
export function elementInlineStyleWaitVar(selector: string, style: string, method: string = 'main'): Promise<Element | Error | null> | Error {
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

export const elementInlineStyleHideWaitMain = elementInlineStyleHideWait;

/**
 * Hides an element by applying inline styles after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @returns {Promise<Element | Error>} A promise that resolves when the style has been applied.
 */
export function elementInlineStyleHideWait(selector: string, style: string = 'display: none'): Promise<Element | Error> {
    return elementWait(selector).then(function () {
        return elementInlineStyleHide(selector, style);
    });
}

/**
 * Hides an element by applying alternate inline styles after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @returns {Promise<Element | Error>} A promise that resolves when the style has been applied.
 */
export function elementInlineStyleHideWaitAlt(selector: string, style: string = 'display: none'): Promise<Element | Error> {
    return elementWaitAlt(selector).then(function () {
        return elementInlineStyleHide(selector, style);
    });
}

/**
 * Hides an element by applying inline styles after waiting for it to appear, using the specified method.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @param {string} [method='main'] - The method to use ('main' or 'alt').
 * @returns {Promise<void> | Error} A promise that resolves when the style has been applied, or an error if the method is invalid.
 */
export function elementInlineStyleHideWaitVar(selector: string, style: string = 'display: none', method: string = 'main'): Promise<Element | Error | null> | Error {
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
