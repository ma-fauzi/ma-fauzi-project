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

        <section class="self">
            <div class="intro">
            <h1>Hey, I'm</h1>
            <h1>Muhammad Afif Fauzi</h1>
            <p>
                Front-end developer who focuses on simple design and functional user experience.  
            </p>
            </div>

            <div class="photo">
            <img src="/img/myPhoto.jpg" alt="My Photo" />
            </div>
        </section>

        <section class="find-me">
            <h2>Find Me Online</h2>
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
        `;
  }
}

customElements.define("home-page", Homepage);
