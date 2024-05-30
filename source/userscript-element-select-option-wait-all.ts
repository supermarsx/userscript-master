/**
 * Element select option wait all
 */

import {
    selectorOptionTextAndValueObject
} from "./userscript-element-select-option-wait-all-types";

import {
    elementSelectOptionAddWait,
    elementSelectOptionAddWaitAlt
} from "./userscript-element-select-option-wait";

/**
 * Adds options to select elements after waiting for them to appear.
 * 
 * @param {Array<selectorOptionTextAndValueObject>} selectorOptionTextAndValueObjectArray - Array of objects containing selectors, option text, and option value.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementSelectOptionAddWaitAll(selectorOptionTextAndValueObjectArray: Array<selectorOptionTextAndValueObject>): void | Error {
    for (const { selector, optionText, optionValue } of selectorOptionTextAndValueObjectArray) {
        try {
            elementSelectOptionAddWait(selector, optionText, optionValue);
        } catch (error: any) {
            const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}

/**
 * Adds options to select elements after waiting for them to appear. alternate method
 * 
 * @param {Array<selectorOptionTextAndValueObject>} selectorOptionTextAndValueObjectArray - Array of objects containing selectors, option text, and option value.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementSelectOptionAddWaitAltAll(selectorOptionTextAndValueObjectArray: Array<selectorOptionTextAndValueObject>): void | Error {
    for (const { selector, optionText, optionValue } of selectorOptionTextAndValueObjectArray) {
        try {
            elementSelectOptionAddWaitAlt(selector, optionText, optionValue);
        } catch (error: any) {
            const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
