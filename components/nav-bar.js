class Navbar extends HTMLElement {
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
    <nav>
        <div class="logo">
          <a href="/"><img src="/icons/maf-logo512.png" alt="My Photo"/></a>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/work">My Work</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#" id="downloadCV">My CV</a></li>
        </ul>
        <div class="trigger-container">
          <a class="mobile-logo" href="/"><img src="/icons/maf-logo32.png" alt="My Logo"/></a>
          <a class="trigger" href="#">☰</a>
        </div>
    </nav>
    `;

    const navTrigger = this.shadow.querySelector(".trigger");
    const navList = this.shadow.querySelector("nav ul");
    const anchorTag = this.shadow.querySelectorAll("nav ul li a");
    const downloadCVBtn = this.shadow.getElementById("downloadCV");

    navTrigger.addEventListener("click", function () {
      navList.classList.toggle("showNav");
    });

    anchorTag.forEach((element) => {
      element.addEventListener("click", function () {
        navList.classList.remove("showNav");
      });
    });

    downloadCVBtn.addEventListener("click", function () {
      window.open("/assets/CV _Muhammad Afif Fauzi.pdf");
      return false;
    });
  }
}

customElements.define("nav-bar", Navbar);
