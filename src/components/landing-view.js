class LandingView extends HTMLElement {
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
        
        <section class="landing-section">
            <div class="introduction">
                <h1>HEY. I AM</h1>
                <h1>MUHAMMAD</h1>
                <h1>AFIF</h1>
                <h1>FAUZI</h1>
            </div>
            <div class="social">
                <ul>
                    <li><a target="_blank" href="https://www.linkedin.com/in/ma-fauzi/">Linkedin</a></li>
                    <li><a target="_blank" href="https://github.com/afiffauz1">Github</a></li>
                    <li><a target="_blank" href="https://twitter.com/m4_fauzi">Twitter</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/ma.fauz1/">Instagram</a></li>
                </ul>
            </div>
            </section>
        `;
  }
}

customElements.define("landing-view", LandingView);
