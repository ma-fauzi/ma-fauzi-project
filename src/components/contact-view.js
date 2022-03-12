class ContactView extends HTMLElement {
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
    <h2 class="title center">Contact.</h2>
    <div class="contact-section">
      <div class="quest">
        <div class="photo">
            <img src="/assets/icons/my-logo512.png" alt="My Logo"/>
        </div>
        <p>Have a question?</p>
      </div>
      <div class="contact-card">
        <h2>Email</h2>
        <p>ma_fauzi@outlook.com</p>
      </div>
    </div>
        `;
  }
}

customElements.define("contact-view", ContactView);
