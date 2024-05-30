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
export function scriptInjectFromUrlAll(urlAndLocationObjectArray: Array<urlAndLocationObject>): void | Error {
    for (const { url, location } of urlAndLocationObjectArray) {
        try {
            scriptInjectFromUrl(url, location);
        } catch (error: any) {
            const errorMessage = `Failed to inject script from URL (${url}) to location (${location}): ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}

/**
 * Injects scripts from text into specified locations for an array of script and location objects.
 * 
 * @param {Array<scriptAndLocationObject>} scriptAndLocationObjectArray - Array of objects containing scripts and locations.
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function scriptInjectFromTextAll(scriptAndLocationObjectArray: Array<scriptAndLocationObject>): void | Error {
    for (const { script, location } of scriptAndLocationObjectArray) {
        try {
            scriptInjectFromText(script, location);
        } catch (error: any) {
            const errorMessage = `Failed to inject script to location (${location}): ${error.message}`;
            console.error(errorMessage);
            return new Error(errorMessage);
        }
    }
}
