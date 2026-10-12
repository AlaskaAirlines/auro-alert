/* eslint-disable one-var */
/* eslint-disable no-undef */
import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-alert", () => {
  it("sets auro-alert to default style", async () => {
    const el = await fixture(html`
      <auro-alert></auro-alert>
    `);

    const root = el.shadowRoot;
    const content = root.querySelector(".alert");
    await expect(content.getAttribute("aria-hidden")).to.equal("false");
  });

  it("sets auro-alert to error style", async () => {
    const el = await fixture(html`
      <auro-alert type="error"></auro-alert>
    `);

    const root = el.shadowRoot;
    const icon = root.querySelector('[auro-icon="true"]');
    const category = icon.getAttribute("category");
    const iconName = icon.getAttribute("name");

    await expect(category).to.equal("alert");
    await expect(iconName).to.equal("error-stroke");
  });

  it("sets auro-alert to warning style", async () => {
    const el = await fixture(html`
      <auro-alert type="warning"></auro-alert>
    `);

    const root = el.shadowRoot;
    const icon = root.querySelector('[auro-icon="true"]');
    const category = icon.getAttribute("category");
    const iconName = icon.getAttribute("name");

    await expect(category).to.equal("alert");
    await expect(iconName).to.equal("warning-stroke");
  });

  it("sets auro-alert to success style", async () => {
    const el = await fixture(html`
      <auro-alert type="success"></auro-alert>
    `);

    const root = el.shadowRoot;
    const icon = root.querySelector('[auro-icon="true"]');
    const category = icon.getAttribute("category");
    const iconName = icon.getAttribute("name");

    await expect(category).to.equal("interface");
    await expect(iconName).to.equal("check-stroke");
  });

  it("sets auro-alert to information style", async () => {
    const el = await fixture(html`
      <auro-alert type="information"></auro-alert>
    `);

    const root = el.shadowRoot;
    const icon = root.querySelector('[auro-icon="true"]');
    const category = icon.getAttribute("category");
    const iconName = icon.getAttribute("name");

    await expect(category).to.equal("alert");
    await expect(iconName).to.equal("information-stroke");
  });

  it("sets role to alert on the host for error, warning, and success types", async () => {
    for (const type of ["error", "warning", "success"]) {
      const el = await fixture(html`
        <auro-alert type="${type}"></auro-alert>
      `);

      await expect(el.getAttribute("role")).to.equal("alert");
    }
  });

  it("does not set role on the host for information type", async () => {
    const el = await fixture(html`
      <auro-alert type="information"></auro-alert>
    `);

    await expect(el.hasAttribute("role")).to.be.false;
  });

  it("auro-alert is accessible", async () => {
    const el = await fixture(html`
      <auro-alert type="information">
        <p>For your child's safety, unaccompanied minors aged 8-17 can only fly on Alaska Airlines flights departing between 5:00 AM and 9:00 PM. <a href="#">Rules for children traveling alone.</a></p>
        <p>We searched for all Seattle Area, WA airports. Be sure to note which airport is being used.</p>
        <p>We searched for all Bay Area, CA airports. Be sure to note which airport is being used.</p>
      </auro-alert>
    `);

    await expect(el).to.be.accessible();
  });

  it("binds lowercase attributes to camelCase properties", async () => {
    const el = await fixture(html`
      <auro-alert hiddenaudible hiddenvisually noicon type="error"></auro-alert>
    `);

    await expect(el.hiddenAudible).to.be.true;
    await expect(el.hiddenVisually).to.be.true;
    await expect(el.noIcon).to.be.true;
    await expect(el.shadowRoot.querySelector('[auro-icon="true"]')).to.be.null;
  });

  it("auro-alert custom element is defined", async () => {
    const el = await Boolean(customElements.get("auro-alert"));

    await expect(el).to.be.true;
  });
});
