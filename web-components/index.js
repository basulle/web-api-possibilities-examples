class BaselElement extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const h3 = document.createElement("h3");
    h3.innerHTML = "Basel Component";
    this.appendChild(h3);
  }

  connectedCallback() {
    this.render();
  }
}

class BaselElementWithShadowDom extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const h3 = document.createElement("h3");
    h3.innerHTML =
      "Encapsulated tag under the shadow dom which is not affected by global styles";
    shadow.appendChild(h3);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("basel-element", BaselElement);
customElements.define("basel-element-shadow", BaselElementWithShadowDom);
