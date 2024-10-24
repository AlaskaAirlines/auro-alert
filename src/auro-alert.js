// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import { html } from 'lit/static-html.js';
import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement.mjs';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';
import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

/**
 * @attr {Boolean} noIcon - Removes icon from alert UI
 * @attr {String} type - Component will render visually based on which type value is set; currently supports `error`, `warning`, `success`, `information`
 * @csspart alert - Use for customizing the style of the alert container
 * @csspart alert-content - Use for customizing the style of the alert content
 *
 * @slot - Provide text for the alert. If using multiple lines, separate each line with `<p>` tags.
 */
export class AuroAlert extends AuroElement {
  constructor() {
    super();

    /**
     * Generate unique names for dependency components.
     */
    const versioning = new AuroDependencyVersioning();
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

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
      },

      /**
       * @private
       */
      iconTag: {
        type: String
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-alert');
  }

  /**
   * @private
   * @param {string} category - The category of the icon.
   * @param {string} name - The name of the icon.
   * @returns {string} - The html template for the icon.
   */
  generateIconHtml(category, name) {
    return this.noIcon
      ? html``
      : html`<${this.iconTag} customColor category="${category}" name="${name}"></${this.iconTag}>`;

  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    let output = html``;

    switch (this.type) {
      case undefined:
        break;
      case "error":
        output = this.generateIconHtml("alert", "error-stroke");
        this.role = "alert";
        this.typeStr = "Error.";
        break;
      case "success":
        output = this.generateIconHtml("interface", "check-stroke");
        this.role = "alert";
        this.typeStr = "Success.";
        break;
      case "warning":
        output = this.generateIconHtml("alert", "warning-stroke");
        this.role = "alert";
        this.typeStr = "Warning.";
        break;
      case "information":
        output = this.generateIconHtml("alert", "information-stroke");
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
