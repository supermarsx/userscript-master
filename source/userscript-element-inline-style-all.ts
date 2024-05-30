/**
 * Element inline style all
 */

import {
    elementInlineStyle,
    elementInlineStyleHide
} from "./userscript-element-inline-style";

import {
    selectorAndStyleObject
} from "./userscript-element-inline-style-all-types";

/**
 * Applies inline styles to multiple elements based on an array of selector and style objects.
 * 
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementInlineStyleAll(selectorAndStyleObjectArray: Array<selectorAndStyleObject>): void | Error {
    for (const { selector, style } of selectorAndStyleObjectArray) {
        try {
            elementInlineStyle(selector, style);
        } catch (error: any) {
            const errorMessage = `Failed to apply style to element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}

/**
 * Hides multiple elements by applying inline styles based on an array of selector and style objects.
 * 
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementInlineStyleHideAll(selectorAndStyleObjectArray: Array<selectorAndStyleObject>): void | Error {
    for (const { selector, style } of selectorAndStyleObjectArray) {
        try {
            elementInlineStyleHide(selector, style);
        } catch (error: any) {
            const errorMessage = `Failed to hide element with selector ${selector}: ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
