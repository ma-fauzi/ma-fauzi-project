class FooterView extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <link rel="stylesheet" href="/styles/style.css" />

        <p>&copy Muhammad Afif Fauzi - Project | 2020</p>
        `;
  }
}

customElements.define("footer-view", FooterView);
