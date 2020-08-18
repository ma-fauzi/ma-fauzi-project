class ContactPage extends HTMLElement {
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
        <h1>Contact</h1>
      </div>

      <div class="content">
        <div class="sec1">
            <h2>Email :</h2>
            <p>ma.fauzi@outlook.com</p>
        </div>
        <div class="separate">
            <h2>Or</h2>
        </div>
        <div class="sec2">
            <h2>Phone and Whatsapp</h2>
            <p>082144844522</p>
        </div>
      </div>
      `;
  }
}

customElements.define("contact-page", ContactPage);
