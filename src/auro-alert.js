// Copyright (c) 2026 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import { html } from "lit/static-html.js";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import AuroElement from "@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement.mjs";

import iconVersion from "./iconVersion.js";

import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * The `auro-alert` element is used to provide contextual feedback messages for typical user actions.
 * @customElement auro-alert
 * 
 * @slot - Provide text for the alert. If using multiple lines, separate each line with `<p>` tags.
 * @csspart alert - Use for customizing the style of the alert container
 * @csspart alert-content - Use for customizing the style of the alert content
 */
export class AuroAlert extends AuroElement {
  constructor() {
    super();

    /**
     * Generate unique names for dependency components.
     */
    const versioning = new AuroDependencyVersioning();
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...AuroElement.properties,

      /**
       * If present, the component will be hidden both visually and from screen readers
       */
      hidden: { 
        type: Boolean,
        reflect: true 
      },

      /**
       * If present, the component will be hidden from screen readers, but seen visually
       */
      hiddenAudible:  { 
        type: Boolean,
        reflect: true 
      },

      /**
       * If present, the component will be hidden visually, but still read by screen readers
       */
      hiddenVisually: { 
        type: Boolean,
        reflect: true 
      },

      /**
       * @private
       */
      iconTag: {
        type: String,
      },

      /**
       * Removes icon from alert UI when `type` attribute is set
       */
      noIcon: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @private
       */
      role: {
        type: String,
        reflect: true,
      },

      /**
       * Component will render visually based on which type value is set
       * @type {'information' | 'error' | 'success' | 'warning'}
       */
      type: {
        type: String,
        attribute: "type",
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-alert"] - The name of the element that you want to register.
   *
   * @example
   * AuroAlert.register("custom-alert") // this will register this element to <custom-alert/>
   *
   */
  static register(name = "auro-alert") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroAlert);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-alert");
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
        <div part="alert-content" class="content body-lg">
          <span class="util_displayHiddenVisually">${this.typeStr}</span>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
