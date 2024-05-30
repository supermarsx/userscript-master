/**
 * Style injection all functions
 */

import {
    styleInjectElementHide,
    styleInjectElementInvisible,
    styleInjectElementTransparent,
    styleInjectFromText,
    styleInjectFromUrl
} from "./userscript-style-injection";

import {
    styleCssAndLocationObject,
    styleUrlAndLocationObject
} from "./userscript-style-injection-all-types";

/**
 * Injects CSS styles from URLs into specified locations for an array of URL and location objects.
 * 
 * @param {Array<styleUrlAndLocationObject>} styleUrlAndLocationObjectArray - Array of objects containing URLs and locations.
 * @returns {void}
 */
export function styleInjectFromUrlAll(styleUrlAndLocationObjectArray: Array<styleUrlAndLocationObject>): void {
    for (const styleObject of styleUrlAndLocationObjectArray) {
        const { url, location } = styleObject;
        styleInjectFromUrl(url, location);
    }
}

/**
 * Injects CSS styles from text into specified locations for an array of CSS and location objects.
 * 
 * @param {Array<styleCssAndLocationObject>} styleCssAndLocationObjectArray - Array of objects containing CSS text and locations.
 * @returns {void}
 */
export function styleInjectFromTextAll(styleCssAndLocationObjectArray: Array<styleCssAndLocationObject>): void {
    for (const styleObject of styleCssAndLocationObjectArray) {
        const { css, location } = styleObject;
        styleInjectFromText(css, location);
    }
}

/**
 * Hides elements specified by an array of CSS selectors.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
export function styleInjectElementHideAll(selectorArray: Array<string>): void {
    for (const selector of selectorArray) {
        styleInjectElementHide(selector);
    }
}

/**
 * Makes elements specified by an array of CSS selectors transparent.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
export function styleInjectElementTransparentAll(selectorArray: Array<string>): void {
    for (const selector of selectorArray) {
        styleInjectElementTransparent(selector);
    }
}

/**
 * Makes elements specified by an array of CSS selectors invisible.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */
export function styleInjectElementInvisibleAll(selectorArray: Array<string>): void {
    for (const selector of selectorArray) {
        styleInjectElementInvisible(selector);
    }
}
