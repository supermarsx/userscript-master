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
export function elementWait(selector: string, timeout: number = 15000): Promise<Element> {
    return new Promise(function (resolve, reject) {
        const element = elementSelect(selector);
        if (element) {
            return resolve(element);
        }

        const observer = new MutationObserver(function (mutations) {
            const element = elementSelect(selector);
            if (element) {
                observer.disconnect();
                return resolve(element);
            }
        });

        const observerOptions = {
            childList: true,
            subtree: true
        };

        observer.observe(document.body, observerOptions);

        setTimeout(function () {
            observer.disconnect();
            reject(new Error(`Timeout after ${timeout}ms: Element ${selector} not found`));
        }, timeout);
    });
}

/**
 * Wait for an element to appear in the DOM by periodically checking at a specified interval.
 * 
 * @param {string} selector - CSS selector of the target element.
 * @param {number} [interval=100] - Interval in milliseconds to check for the element (default is 100ms).
 * @param {number} [timeout=15000] - Maximum time to wait in milliseconds (default is 15 seconds).
 * @returns {Promise<Element>} Promise that resolves with the element if found, or rejects with an error if the timeout is reached.
 */
export function elementWaitAlt(selector: string, interval: number = 100, timeout: number = 15000): Promise<Element> {
    return new Promise(function (resolve, reject) {
        const elementChecker = setInterval(() => {
            const element = elementSelect(selector);
            if (element) {
                clearInterval(elementChecker);
                resolve(element);
            }
        }, interval);

        setTimeout(() => {
            clearInterval(elementChecker);
            reject(new Error(`Timeout after ${timeout}ms: Element ${selector} not found`));
        }, timeout);
    });
}
