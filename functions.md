# Functions Documentation

## userscript-checks.ts
### checkIsIframe
/**
 * Check functions
 */

/**
 * Checks if the current window is an iframe.
 * 
 * @returns {boolean} True if the current window is an iframe, otherwise false.
 */

## userscript-element-clone.ts
### elementClone
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

### elementCloneToDestination
/**
 * Clones an element from the source selector and appends it to the destination selector.
 * 
 * @param {string} selectorSource - The CSS selector of the element to clone.
 * @param {string} selectorDestination - The CSS selector of the destination element.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

## userscript-element-inline-style-all.ts
### elementInlineStyleAll
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

### elementInlineStyleHideAll
/**
 * Hides multiple elements by applying inline styles based on an array of selector and style objects.
 * 
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

## userscript-element-inline-style-wait-all.ts
### elementInlineStyleWaitAll
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

### elementInlineStyleWaitAltAll
/**
 * Applies alternate inline styles to multiple elements with a wait function.
 * 
 * @param {Array<selectorAndStyleObject>} selectorAndStyleObjectArray - Array of objects containing selectors and styles.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

### elementInlineStyleWaitVarAll
/**
 * Applies inline styles to multiple elements with a variable wait function.
 * 
 * @param {Array<selectorStyleAndMethodObject>} selectorStyleAndMethodObjectArray - Array of objects containing selectors, styles, and methods.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

## userscript-element-inline-style-wait.ts
### elementInlineStyleWait
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

### elementInlineStyleWaitAlt
/**
 * Applies alternate inline styles to an element after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Promise<Element | Error | null>} A promise that resolves when the style has been applied.
 */

### elementInlineStyleWaitVar
/**
 * Applies inline styles to an element after waiting for it to appear, using the specified method.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @param {string} [method='main'] - The method to use ('main' or 'alt').
 * @returns {Promise<Element | Error | null> | Error} A promise that resolves when the style has been applied, or an error if the method is invalid.
 */

### elementInlineStyleHideWait
/**
 * Hides an element by applying inline styles after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @returns {Promise<Element | Error>} A promise that resolves when the style has been applied.
 */

### elementInlineStyleHideWaitAlt
/**
 * Hides an element by applying alternate inline styles after waiting for it to appear.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @returns {Promise<Element | Error>} A promise that resolves when the style has been applied.
 */

### elementInlineStyleHideWaitVar
/**
 * Hides an element by applying inline styles after waiting for it to appear, using the specified method.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply.
 * @param {string} [method='main'] - The method to use ('main' or 'alt').
 * @returns {Promise<void> | Error} A promise that resolves when the style has been applied, or an error if the method is invalid.
 */

## userscript-element-inline-style.ts
### elementInlineApplyStyle
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

### elementInlineStyle
/**
 * Applies inline styles to an element selected by a CSS selector.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} style - The CSS style to apply.
 * @returns {Element | Error} The styled element, or an error if the element was not found or is invalid.
 */

### elementInlineStyleHide
/**
 * Hides an element by applying the given style.
 * 
 * @param {string} selector - The CSS selector of the element.
 * @param {string} [style='display: none'] - The CSS style to apply to hide the element.
 * @returns {Element | Error} The hidden element, or an error if the element was not found or is invalid.
 */

## userscript-element-select-option-wait-all.ts
### elementSelectOptionAddWaitAll
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

### elementSelectOptionAddWaitAltAll
/**
 * Adds options to select elements after waiting for them to appear. alternate method
 * 
 * @param {Array<selectorOptionTextAndValueObject>} selectorOptionTextAndValueObjectArray - Array of objects containing selectors, option text, and option value.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

## userscript-element-select-option-wait.ts
### elementSelectOptionAddWait
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

### elementSelectOptionAddWaitAlt
/**
 * Adds an option to a select element after waiting for it to appear. alternate method
 * 
 * @param {string} selector - The CSS selector of the select element.
 * @param {string} optionText - The text of the option to add.
 * @param {string} optionValue - The value of the option to add.
 * @returns {Promise<void | Error>} A promise that resolves when the option has been added.
 */

## userscript-element-select-option.ts
### elementSelectOptionAdd
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

## userscript-element-selection.ts
### elementSelect
/**
 * Element selection functions
 */

/**
 * Selects the first DOM element that matches the given CSS selector.
 * @param {string} selector - A CSS selector string to match the desired element.
 * @returns {Element | null} The first Element within the document that matches the specified selector, or null if no matches are found.
 */

## userscript-element-wait.ts
### elementWait
/**
 * Element wait functions 
 */

import {
    elementSelect
} from "./userscript-element-selection";

/**
 * Wait for an element to appear in the DOM.
 * 
 * @param {string} selector - CSS selector of the target element.
 * @param {number} [timeout=15000] - Maximum time to wait in milliseconds (default is 15 seconds).
 * @returns {Promise<Element>} Promise that resolves with the element if found, or rejects with an error if the timeout is reached.
 */

### elementWaitAlt
/**
 * Wait for an element to appear in the DOM by periodically checking at a specified interval.
 * 
 * @param {string} selector - CSS selector of the target element.
 * @param {number} [interval=100] - Interval in milliseconds to check for the element (default is 100ms).
 * @param {number} [timeout=15000] - Maximum time to wait in milliseconds (default is 15 seconds).
 * @returns {Promise<Element>} Promise that resolves with the element if found, or rejects with an error if the timeout is reached.
 */

## userscript-events.ts
### eventWaitDomLoaded
/**
 * Event functions
 */

/**
 * Wait for the DOM content to be loaded before executing the callback.
 * 
 * @param {Function} callback - The callback function to execute once the DOM content is loaded.
 * @returns {void}
 */

## userscript-script-injection-all.ts
### scriptInjectFromUrlAll
/**
 * Script injection all functions
 */

import {
    scriptInjectFromText,
    scriptInjectFromUrl
} from "./userscript-script-injection";

import {
    urlAndLocationObject,
    scriptAndLocationObject
} from "./userscript-script-injection-all-types";

/**
 * Injects scripts from URLs into specified locations for an array of URL and location objects.
 * 
 * @param {Array<urlAndLocationObject>} urlAndLocationObjectArray - Array of objects containing URLs and locations.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

### scriptInjectFromTextAll
/**
 * Injects scripts from text into specified locations for an array of script and location objects.
 * 
 * @param {Array<scriptAndLocationObject>} scriptAndLocationObjectArray - Array of objects containing scripts and locations.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

## userscript-script-injection.ts
### scriptInjectFromUrl
/**
 * Script injection functions
 */

/**
 * Injects a script from a URL into the specified location in the DOM.
 * 
 * @param {string} url - The URL of the script to inject.
 * @param {string} [location='head'] - The location to inject the script ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

### scriptInjectFromText
/**
 * Injects a script from text into the specified location in the DOM.
 * 
 * @param {string} script - The script content to inject.
 * @param {string} [location='head'] - The location to inject the script ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

## userscript-special-element.ts
### specialElementAddGoToBottomAndTop
/**
 * Special elements
 */

import {
	styleInjectFromText
} from "./userscript-style-injection";

/**
 * Adds "Go to Bottom" and "Go to Top" buttons to the webpage with corresponding styles.
 * 
 * @returns {void}
 */

## userscript-style-darkmode.ts
### styleDarkModeInvertColors
/**
 *  Style dark mode
 */

import {
    styleInjectFromText
} from "./userscript-style-injection";

/**
 * Applies a CSS filter to invert colors for the specified tags.
 * 
 * @param {number} [inversion=1] - The amount of inversion to apply (0 to 1).
 * @param {string} [tags='html, img, video, iframe'] - The tags to apply the filter to.
 * @param {string} [additionalfilters=''] - Additional CSS filters to apply.
 * @returns {void}
 */

### styleDarkModeInvertColorsAndHueRotate
/**
 * Applies a CSS filter to invert colors and rotate hues for the specified tags.
 * 
 * @param {number} [inversion=1] - The amount of inversion to apply (0 to 1).
 * @param {number} [rotation=180] - The degree of hue rotation to apply.
 * @param {string} [tags='html, img, video, iframe'] - The tags to apply the filter to.
 * @param {string} [additionalfilters=''] - Additional CSS filters to apply.
 * @returns {void}
 */

## userscript-style-element-darkmode-all.ts
### styleElementDarkModeMethod1All
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

### styleElementDarkModeMethod2All
/**
 * Applies dark mode styling using method 2 to all elements matching the selectors in the array.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */

### styleElementDarkModeMethod3All
/**
 * Applies dark mode styling using method 3 to all elements matching the selectors in the array.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */

## userscript-style-element-darkmode.ts
### styleElementDarkModeMethod1
/**
 * Style element dark mode
 */

import {
    styleInjectFromText
} from "./userscript-style-injection";

/**
 * Applies dark mode styling using method 1 to the specified selector.
 * 
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */

### styleElementDarkModeMethod2
/**
 * Applies dark mode styling using method 2 to the specified selector.
 * 
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */

### styleElementDarkModeMethod3
/**
 * Applies dark mode styling using method 3 to the specified selector.
 * 
 * @param {string} selector - The CSS selector of the element to style.
 * @returns {void}
 */

## userscript-style-injection-all.ts
### styleInjectFromUrlAll
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

### styleInjectFromTextAll
/**
 * Injects CSS styles from text into specified locations for an array of CSS and location objects.
 * 
 * @param {Array<styleCssAndLocationObject>} styleCssAndLocationObjectArray - Array of objects containing CSS text and locations.
 * @returns {void}
 */

### styleInjectElementHideAll
/**
 * Hides elements specified by an array of CSS selectors.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */

### styleInjectElementTransparentAll
/**
 * Makes elements specified by an array of CSS selectors transparent.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */

### styleInjectElementInvisibleAll
/**
 * Makes elements specified by an array of CSS selectors invisible.
 * 
 * @param {Array<string>} selectorArray - Array of CSS selectors.
 * @returns {void}
 */

## userscript-style-injection.ts
### styleInjectFromUrl
/**
 * Style injection functions
 */

/**
 * Injects a CSS stylesheet from a URL into the specified location in the DOM.
 * 
 * @param {string} url - The URL of the CSS file.
 * @param {string} [location='head'] - The location to inject the CSS ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

### styleInjectFromText
/**
 * Injects CSS styles from text into the specified location in the DOM.
 * 
 * @param {string} styleCss - The CSS text to inject.
 * @param {string} [location='head'] - The location to inject the CSS ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */

### styleInjectElementHide
/**
 * Hides elements specified by a CSS selector.
 * 
 * @param {string} selector - The CSS selector of the elements to hide.
 * @returns {void}
 */

### styleInjectElementTransparent
/**
 * Makes elements specified by a CSS selector transparent.
 * 
 * @param {string} selector - The CSS selector of the elements to make transparent.
 * @returns {void}
 */

### styleInjectElementInvisible
/**
 * Makes elements specified by a CSS selector invisible.
 * 
 * @param {string} selector - The CSS selector of the elements to make invisible.
 * @returns {void}
 */

