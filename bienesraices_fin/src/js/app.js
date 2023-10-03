document.addEventListener("DOMContentLoaded", function () {
  eventListeners();

  darkMode();
});

function darkMode() {
  const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  // console.log(prefiereDarkMode.matches);

  if (prefiereDarkMode.matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  prefiereDarkMode.addEventListener("change", function () {
    if (prefiereDarkMode.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  const botonDarkMode = document.querySelector(".dark-mode-boton");
  botonDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

function eventListeners() {
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  const navegacion = document.querySelector(".navegacion");

  navegacion.classList.toggle("mostrar");
}
// Create the back button element
const backButtonContainer = document.getElementById("back-button-container");
const backButton = document.createElement("button");
backButton.setAttribute("id", "back-button");
backButton.textContent = "Back to Portfolio";

// Add an event listener to the back button
backButton.addEventListener("click", () => {
  // Change the URL to your portfolio URL
  window.location.href = "https://your-portfolio-website.com";
});

// Append the back button to the container
backButtonContainer.appendChild(backButton);
