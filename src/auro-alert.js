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
 * Shows an inline message that gives feedback about a user action, such as an error, success, warning, or information message.
 *
 * **Key capabilities**
 * - **Alert types**: Set `type` to `error`, `information`, `success`, or `warning` to change the icon and border color.
 * - **Optional icon**: Set `noIcon` to remove the icon.
 * - **Hiding**: Set `hidden` to hide the alert from everyone, `hiddenVisually` to hide it visually but keep it available to screen readers, or `hiddenAudible` to keep it visible but hidden from screen readers.
 * - **Custom content**: The default slot accepts any content, and each `<p>` tag starts a new line.
 *
 * **Example**
 * ```html
 * <auro-alert type="success">Your changes are saved.</auro-alert>
 * ```
 *
 * @summary An inline alert with icons and colors for error, success, warning, and information messages.
 * @customElement auro-alert
 *
 * @slot - Provide text for the alert. If using multiple lines, separate each line with `<p>` tags.
 * @csspart alert - The outer container that holds the icon and the message.
 * @csspart alert-content - The area next to the icon that holds the alert message.
 *
 * @cssprop --ds-auro-alert-border-color - Color of the alert's border.
 * @cssprop --ds-auro-alert-container-color - Background color of the alert.
 * @cssprop --ds-auro-alert-icon-color - Color of the alert's icon.
 * @cssprop --ds-auro-alert-text-color - Color of the alert's text.
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
       * Hides the alert both visually and from screen readers.
       */
      hidden: { 
        type: Boolean,
        reflect: true 
      },

      /**
       * Hides the alert from screen readers while keeping it visible.
       */
      hiddenAudible:  { 
        type: Boolean,
        reflect: true 
      },

      /**
       * Hides the alert visually while keeping it available to screen readers.
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
       * Removes the icon from the alert. Applies only when `type` is set, because an alert without a type has no icon.
       * @relevantWhen type
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
       * Sets the alert's purpose, which controls its icon and border color: `error`, `warning`, `success`, or `information`. Without a value, the alert shows no icon and uses a default border color. Screen readers announce `error`, `success`, and `warning` alerts right away because they use `role="alert"`, but `information` alerts aren't announced automatically.
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
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-alert"] - The tag name to register the element under.
   *
   * @example
   * AuroAlert.register("custom-alert") // Registers the element as <custom-alert>
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
   * @returns {import("lit").TemplateResult} The HTML template for the icon, or an empty template when `noIcon` is set.
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
