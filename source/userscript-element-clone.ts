/**
 * Element clone functions
 */

import {
    elementSelect
} from "./userscript-element-selection";

/**
 * Clones an element based on the provided selector.
 * 
 * @param {string} selector - The CSS selector of the element to clone.
 * @returns {Node | Error} The cloned node or an error if the element is not found.
 */
export function elementClone(selector: string): Node | Error {
    const element = elementSelect(selector);
    if (element) {
        const elementClone = element.cloneNode(true);
        return elementClone;
    } else {
        return new Error(`Failed to clone element with selector ${selector}`);
    }
}

/**
 * Clones an element from the source selector and appends it to the destination selector.
 * 
 * @param {string} selectorSource - The CSS selector of the element to clone.
 * @param {string} selectorDestination - The CSS selector of the destination element.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function elementCloneToDestination(selectorSource: string, selectorDestination: string): void | Error {
    const elementSourceClone: Node | Error = elementClone(selectorSource);
    if (elementSourceClone instanceof Error) {
        console.error(elementSourceClone.message);
        return new Error(`Failed to clone element: ${elementSourceClone.message}`);
    }

    const elementDestination = elementSelect(selectorDestination);
    if (!elementDestination) {
        const errorMessage = `Destination element with selector ${selectorDestination} not found.`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }

    try {
        elementDestination.appendChild(elementSourceClone);
    } catch (error: any) {
        const errorMessage = `Failed to append cloned element to destination: ${error.message}`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
}
