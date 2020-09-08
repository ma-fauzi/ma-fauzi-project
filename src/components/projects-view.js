import Projects from "../js/projects.js";

class ProjectsView extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let dataProjects = "";
    Projects.forEach((project) => {
      const { name, thumbnail, projectLink, description } = project;
      dataProjects += `
          <div class="card-project">
            <div class="project-thumbnail">
                <img src="${thumbnail}" alt="Project Thumbnail"/>
            </div>
            <div class="project-info">
                <div class="project-title">
                    <span>${name}</span>
                </div>
                <div class="project-action">
                    <a href="${projectLink}" class="btn-action" target="_blank">Visit</a>
                </div>
            </div>
            <div class="project-description">
                <p>${description}</p>
            </div>
        </div> 
          `;

      this.ui(dataProjects);
    });
  }

  ui(dataProjects) {
    this.shadow.innerHTML = `
        <link rel="stylesheet" href="/styles/style.css" />

        <div class="project-section">
          <h2 class="title center">Projects.</h2>
          <div class="projects-container">
            ${dataProjects}
          </div>
        </div>
        `;
  }
}

customElements.define("projects-view", ProjectsView);
