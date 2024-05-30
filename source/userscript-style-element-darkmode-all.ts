/**
 * Style element dark mode all
 */

import {
    styleElementDarkModeMethod1,
    styleElementDarkModeMethod2,
    styleElementDarkModeMethod3
} from "./userscript-style-element-darkmode";

/**
 * Applies dark mode styling using method 1 to all elements matching the selectors in the array.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
export function styleElementDarkModeMethod1All(selectorArray: Array<string>): void {
    for (const selector of selectorArray) {
        try {
            styleElementDarkModeMethod1(selector);
        } catch (error: any) {
            console.error(`Failed to apply dark mode method 1 to element with selector "${selector}": ${error.message}`);
        }
    }
}

/**
 * Applies dark mode styling using method 2 to all elements matching the selectors in the array.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
export function styleElementDarkModeMethod2All(selectorArray: Array<string>): void {
    for (const selector of selectorArray) {
        try {
            styleElementDarkModeMethod2(selector);
        } catch (error: any) {
            console.error(`Failed to apply dark mode method 2 to element with selector "${selector}": ${error.message}`);
        }
    }
}

/**
 * Applies dark mode styling using method 3 to all elements matching the selectors in the array.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
export function styleElementDarkModeMethod3All(selectorArray: Array<string>): void {
    for (const selector of selectorArray) {
        try {
            styleElementDarkModeMethod3(selector);
        } catch (error: any) {
            console.error(`Failed to apply dark mode method 3 to element with selector "${selector}": ${error.message}`);
        }
    }
}
