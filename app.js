
"use strict";

// VALDEUD OS — initialisation de l'interface
// Les données réelles seront ajoutées dans les prochaines étapes.

document.addEventListener("DOMContentLoaded", () => {
  console.log("VALDEUD OS : interface chargée.");

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
