class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
  
      <link rel="stylesheet" href="../styles/style.css">
      <p>2020 | &copy; Muhammad Afif Fauzi - Project</p>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
