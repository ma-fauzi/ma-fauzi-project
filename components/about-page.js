class AboutPage extends HTMLElement {
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
          <h1>About</h1>
        </div>

        <div class="tag-line">
          <div class="qoutes">
            <h4>"Never assume you can’t do something. Push yourself to redefine the boundaries." <span>- Brian Chesky</span></h4>
          </div>
          <div class="photo">
            <img src="/img/myPhoto.jpg" alt="My Photo"/>
          </div>
        </div>
        <div class="text-box">
            <p>
            I grew up in the small-town of Sidoarjo, East Java, Indonesia. I'm a people who enjoy every challenge, continuous learner and give
            the best every doing work. I spend my days crafting a website. When I'm not coding, you'll find me drawing comic, playing games or sometimes I go to traveling. I’m constantly learning web technologies, especially I often do experiment with HTML, CSS, and Javascript.
            </p>
        </div>
        
        `;
  }
}

customElements.define("about-page", AboutPage);
