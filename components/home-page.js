class Homepage extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <link rel="stylesheet" href="../styles/style.css">

        <section class="intro">
          <h1>Hey, I am</h1>
          <h1>Muhammad<br>Afif<br>Fauzi</h1>
        </section>

        <section class="find-me">
            <ul>
            <li>
                <a href="https://www.linkedin.com/in/ma-fauzi/" target="_blank">
                LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/afiffauz1" target="_blank">
                Github
                </a>
            </li>
            <li>
                <a href="https://twitter.com/m4_fauzi" target="_blank">
                Twitter
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/ma.fauz1/" target="_blank">
                Instagram
                </a>
            </li>
            </ul>
        </section>

        <footer>
          <p>2020 | &copy; Muhammad Afif Fauzi - Project</p>
        </footer>
        `;
  }
}

customElements.define("home-page", Homepage);
