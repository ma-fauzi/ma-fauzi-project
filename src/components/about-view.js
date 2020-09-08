import Education from "../js/education.js";
import Courses from "../js/courses.js";

class AboutView extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let dataEdu = "";
    let dataCour = "";

    Education.forEach((data) => {
      const { schoolName, year } = data;

      dataEdu += `
          <p><strong>${schoolName}</strong></p>
          <p>${year}</p>
          `;
    });

    Courses.forEach((data) => {
      const { courseName, institution, date } = data;

      dataCour += `
            <p><strong>${courseName}</strong></p>
            <p>${institution}</p>
            <p>${date}</p>
        `;
    });

    this.ui(dataEdu, dataCour);
  }

  ui(dataEdu, dataCour) {
    this.shadow.innerHTML = `
    <link rel="stylesheet" href="/styles/style.css" />

    <div class="about-section">
        <h2 class="title center">About.</h2>
        <span class="quotes">
          <p>"Expect the unexpected. And whenever possible, be the unexpected."</p>
          <p><strong>- Jack Dorsey -</strong></p>
        </span>
        <div class="about-content">
            <div class="download-cv">
                <span class="btn-download" id="myCV">Download My CV</span>
            </div>
            <div class="about-me">
                <p>
                My name is Muhammad Afif Fauzi, I grew up in the small-town of Sidoarjo, East Java, Indonesia. I am a people who enjoy every challenge, continuous learner, and give the best every doing work. I am constantly learning web technologies, especially, I often do experiment with HTML, CSS, and Javascript. When I'm not coding, you'll find me drawing comics, playing games or sometimes I go to travel somewhere.
                </p>
                <br/>

                <div class="about-card">
                <h3>Education</h3>
                ${dataEdu}
                </div>

                
                <div class="about-card">
                <h3>Courses</h3>
                ${dataCour}
                </div>
            </div>
        </div>
    </div>
        `;

    const downloadBtn = this.shadow.getElementById("myCV");
    downloadBtn.addEventListener("click", function () {
      window.open("/assets/CV _Muhammad_Afif_Fauzi.pdf");
      return false;
    });
  }
}

customElements.define("about-view", AboutView);
