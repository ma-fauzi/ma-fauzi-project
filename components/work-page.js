import projects from "../js/data/projects.js";

class WorkPage extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.projectsData();
  }

  projectsData() {
    let data = "";

    projects.forEach((project) => {
      data += `
        <div class="card">
          <div class="card-thumbnail">
            <img src="${project.thumbnail}" alt="Thumbnail"/>
          </div>
          <div class="card-content">
            <span class="card-title">${project.name}</span>
            <button class="card-action"><a href="${project.projectLink}" target="_blank">Visit Project</a></button>
          </div>
        </div>
      `;
    });

    this.renderUI(data);
  }

  renderUI(data) {
    this.shadow.innerHTML = `
        <link rel="stylesheet" href="../styles/style.css">

        <div class="title">
            <h1>My Work</h1>
        </div>

        <div class="card-container">
          ${data}
        </div>
        `;
  }
}

customElements.define("work-page", WorkPage);
