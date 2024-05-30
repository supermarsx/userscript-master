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
export function styleDarkModeInvertColors(inversion: number = 1, tags: string = 'html, img, video, iframe', additionalfilters: string = ''): void {
    const styleCss = `
        body {
            background: white;
        }

        ${tags} {
            filter: invert(${inversion}) ${additionalfilters}
        }
    `;
    styleInjectFromText(styleCss);
}

/**
 * Applies a CSS filter to invert colors and rotate hues for the specified tags.
 * 
 * @param {number} [inversion=1] - The amount of inversion to apply (0 to 1).
 * @param {number} [rotation=180] - The degree of hue rotation to apply.
 * @param {string} [tags='html, img, video, iframe'] - The tags to apply the filter to.
 * @param {string} [additionalfilters=''] - Additional CSS filters to apply.
 * @returns {void}
 */
export function styleDarkModeInvertColorsAndHueRotate(inversion: number = 1, rotation: number = 180, tags: string = 'html, img, video, iframe', additionalfilters: string = ''): void {
    const styleCss = `
        body {
            background: white;
        }

        ${tags} {
            filter: invert(${inversion}) hue-rotate(${rotation}deg) ${additionalfilters};
        }
    `;
    styleInjectFromText(styleCss);
}
