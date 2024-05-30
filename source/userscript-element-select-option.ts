/**
 * Element select option
 */

import { elementSelect } from "./userscript-element-selection";

/**
 * Adds an option to a select element.
 * 
 * @param {string} selector - The CSS selector of the select element.
 * @param {string} optionText - The text of the option to add.
 * @param {string} optionValue - The value of the option to add.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementSelectOptionAdd(selector: string, optionText: string, optionValue: string): void | Error {
    const element: HTMLSelectElement | null = elementSelect(selector) as HTMLSelectElement;
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
    } catch (error: any) {
        const errorMessage = `Failed to add option (${optionText}, ${optionValue}) to select element: ${error.message}`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
}
