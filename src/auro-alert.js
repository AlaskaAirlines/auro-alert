// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit";
import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement.mjs';

// Import Icons
import error from '@alaskaairux/icons/dist/icons/alert/error-stroke.mjs';
import warning from '@alaskaairux/icons/dist/icons/alert/warning-stroke.mjs';
import information from '@alaskaairux/icons/dist/icons/alert/information-stroke.mjs';
import success from '@alaskaairux/icons/dist/icons/interface/check-stroke.mjs';

import styleCss from "./style-css.js";

/**
 * @attr {Boolean} noIcon - Removes icon from alert UI
 * @attr {String} type - Component will render visually based on which type value is set; currently supports `error`, `warning`, `success`, `information`
 * @csspart alert - Use for customizing the style of the alert container
 * @csspart alert-content - Use for customizing the style of the alert content
 *
 * @slot - Provide text for the alert. If using multiple lines, separate each line with `<p>` tags.
 */
export class AuroAlert extends AuroElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      noIcon: {
        type: Boolean
      },
      type: {
        type: String,
        reflect: true
      },

      /**
       * @private
       */
      role: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * @private
   * @param {string} svgContent - The imported svg icon.
   * @returns {string} - The html template for the icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
      svg = dom.body.firstChild;

    return this.noIcon
      ? html``
      : html`<div class="icon">${svg}</div>`;
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    let output = html``;

    switch (this.type) {
      case undefined:
        break;
      case "error":
        output = this.generateIconHtml(error.svg);
        this.role = "alert";
        this.typeStr = "Error.";
        break;
      case "success":
        output = this.generateIconHtml(success.svg);
        this.role = "alert";
        this.typeStr = "Success.";
        break;
      case "warning":
        output = this.generateIconHtml(warning.svg);
        this.role = "alert";
        this.typeStr = "Warning.";
        break;
      case "information":
        output = this.generateIconHtml(information.svg);
        this.typeStr = "Informational notice.";
        break;
      default:
        break;
    }

    return html`
      <div part="alert" class="alert"
        aria-hidden="${this.hideAudible(this.hiddenAudible)}">
        ${output}
        <div part="alert-content" class="content">
          <span class="util_displayHiddenVisually">${this.typeStr}</span>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-alert")) {
  customElements.define("auro-alert", AuroAlert);
}
