class NotFound extends HTMLElement {
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
        <div class="notfound">
            <h1>Page not found</h1>
        </div>
        `;
  }
}

customElements.define("not-found", NotFound);
