class WorkPage extends HTMLElement {
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

        <div class="title">
            <h1>My Work</h1>
        </div>
        `;
  }
}

customElements.define("work-page", WorkPage);
