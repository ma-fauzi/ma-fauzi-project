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
    
    <nav class="navbar">
      <div class="my-brand">
        <div class="my-brand-logo">
          <img src="assets/icons/my-logo.png" alt="My logo" />
        </div>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
          <img src="assets/icons/home.png" alt="Home"/>
            <span class="link-text">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link">
            <img src="assets/icons/projects.png" alt="Projects"/>
            <span class="link-text">Projects</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#about" class="nav-link">
            <img src="assets/icons/about.png" alt="About"/>
            <span class="link-text">About</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#contact" class="nav-link">
            <img src="assets/icons/contact.png" alt="Contact"/>
            <span class="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>

      `;
  }
}

customElements.define("navigation-view", NavigationView);
