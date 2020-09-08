class NavigationView extends HTMLElement {
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

    <div class="fixed">
    <nav>
      <div class="logo">
          <a href="#" class="toTop">
          <img src="/assets/icons/my-logo512.png" alt="My Logo" />
          </a>
      </div>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      <span class="mobile-menu">☰</span>
    </nav>
    </div>

      `;

    const menuMobile = this.shadow.querySelector(".mobile-menu");
    const ul = this.shadow.querySelector("nav ul");
    const menuContent = this.shadow.querySelectorAll("nav ul li a");

    menuContent.forEach((item) => {
      item.addEventListener("click", function () {
        ul.classList.remove("showMenu");
      });
    });

    menuMobile.addEventListener("click", function () {
      ul.classList.toggle("showMenu");
    });
  }
}

customElements.define("navigation-view", NavigationView);
