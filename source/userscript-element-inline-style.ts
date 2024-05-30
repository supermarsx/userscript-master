/**
 * Element inline style functions
 */

import {
    elementSelect
} from "./userscript-element-selection";

/**
 * Applies the given style to the specified element.
 * 
 * @param {Element} element - The DOM element to which the style will be applied.
 * @param {string} style - The CSS style to apply.
 * @returns {Element} The element with the applied style.
 */
export function elementInlineApplyStyle(element: Element, style: string): Element {
    element.setAttribute('style', style);
    return element;
}

/**
 * Applies inline styles to an element selected by a CSS selector.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Element | Error} The styled element, or an error if the element was not found or is invalid.
 */
export function elementInlineStyle(selector: string, style: string): Element | Error {
    const element = elementSelect(selector);
    const elementStyle = style.toString().toLowerCase().trim();
    if (element instanceof Element) {
        return elementInlineApplyStyle(element, elementStyle);
    } else {
        const errorMessage = `Failed to apply inline style "${style}" to element with selector "${selector}".`;
        console.error(errorMessage);
        return new Error(errorMessage);
    }
}

/**
 * Hides an element by applying the given style.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply to hide the element.
 * @returns {Element | Error} The hidden element, or an error if the element was not found or is invalid.
 */
export function elementInlineStyleHide(selector: string, style: string = 'display: none'): Element | Error {
    return elementInlineStyle(selector, style);
}
