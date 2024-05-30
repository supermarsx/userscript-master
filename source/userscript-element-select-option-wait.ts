/**
 * Element select option wait
 */

import {
    elementSelectOptionAdd
} from "./userscript-element-select-option";

import {
    elementWait,
    elementWaitAlt
} from "./userscript-element-wait";

/**
 * Adds an option to a select element after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the select element.
 * @param {string} optionText - The text of the option to add.
 * @param {string} optionValue - The value of the option to add.
 * @returns {Promise<void | Error>} A promise that resolves when the option has been added.
 */
export function elementSelectOptionAddWait(selector: string, optionText: string, optionValue: string): Promise<void | Error> {
    return elementWait(selector).then(function () {
        try {
            elementSelectOptionAdd(selector, optionText, optionValue);
        } catch (error: any) {
            const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    });
}

/**
 * Adds an option to a select element after waiting for it to appear. alternate method
 * 
 * @param {string} selector - The CSS selector of the select element.
 * @param {string} optionText - The text of the option to add.
 * @param {string} optionValue - The value of the option to add.
 * @returns {Promise<void | Error>} A promise that resolves when the option has been added.
 */
export function elementSelectOptionAddWaitAlt(selector: string, optionText: string, optionValue: string): Promise<void | Error> {
    return elementWaitAlt(selector).then(function () {
        try {
            elementSelectOptionAdd(selector, optionText, optionValue);
        } catch (error: any) {
            const errorMessage = `Failed to add alternate option (${optionText}, ${optionValue}) to element with selector "${selector}": ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    });
}
