import { Router } from "../js/vaadin-router.js";

const main = () => {
  const bodyContent = document.getElementById("body-content");
  const router = new Router(bodyContent);

  router.setRoutes([
    { path: "/", component: "home-page" },
    { path: "/index.html", component: "home-page" },
    { path: "/contact", component: "contact-page" },
    { path: "/about", component: "about-page" },
    { path: "(.*)", component: "not-found" },
  ]);
};

export default main;
