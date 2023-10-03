// Playing Music
let playMusic = false;
document
  .getElementById("playstopbutton")
  .addEventListener("click", function () {
    var audio = document.getElementById("audio");

    if (playMusic) {
      playMusic = false;
      audio.pause();
      document.getElementById("playstop").src = "assets/play.png";
    } else {
      document.getElementById("playstop").src = "assets/stop.png";
      audio.play();
      playMusic = true;
    }
  });

// Countdown
let countDownDate = new Date("Mar 8, 2024 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days1").innerHTML = days;
  document.getElementById("hours1").innerHTML = hours;
  document.getElementById("minutes1").innerHTML = minutes;
  document.getElementById("seconds1").innerHTML = seconds;
}, 1000);
// Select the element you want to observe
const timelineElement1 = document.querySelector(".first");
const timelineElement2 = document.querySelector(".second");
const timelineElement3 = document.querySelector(".third");
const timelineElement4 = document.querySelector(".fourth");
const timelineElement5 = document.querySelector(".fifth");
const timelineElement6 = document.querySelector(".sixth");
const timeline = document.querySelector(".ghost");

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a class to the element to trigger the animation
      entry.target.classList.add("movedown");
      timelineElement2.classList.add("movedown");
      timelineElement3.classList.add("movedown");
      timelineElement4.classList.add("movedown");
      timelineElement5.classList.add("movedown");
      timelineElement6.classList.add("movedown");
      timeline.classList.add("timeline");

      // Stop observing the element once it's in view (optional)
      observer.unobserve(entry.target);
    }
  });
});

// Start observing the element
observer.observe(timelineElement1);
// Initialize particle animation
particlesJS("particles", {
  particles: {
    number: {
      value: 100, // Adjust the number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Adjust particle color (white)
    },
    shape: {
      type: "circle", // Use circular particles
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5, // Adjust particle opacity
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2, // Adjust particle size
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false, // Disable lines between particles
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3, // Adjust particle movement speed
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Email Handling

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("confirmation-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const guest = formData.get("guests");
    const messag = formData.get("message");

    // Send confirmation email using Email.js (replace with your credentials)
    emailjs.init("nrFcNeZfOcwEQT9P3");

    const emailParams = {
      to_email: "williamhanspierce@gmail.com", // Replace with your email
      from_name: name,
      from_email: email,
      guests: guest,
      message: messag,
    };

    emailjs
      .send("service_q6ah7b7", "template_d8lquop", emailParams)
      .then(function (response) {
        alert("Attendance confirmed! You will receive an email.");
        form.reset();
      })
      .catch(function (error) {
        console.error("Email sending failed:", error);
      });
  });
});

// Popup
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("confirmation-form");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    popup.style.display = "flex"; // Display the popup
  });

  closePopup.addEventListener("click", function () {
    popup.style.display = "none"; // Close the popup when close button is clicked
  });
});
// Back button
// Create the back button element
const backButtonContainer = document.getElementById("back-button-container");
const backButton = document.createElement("button");
backButton.setAttribute("id", "back-button");
backButton.textContent = "Back to Portfolio";

// Add an event listener to the back button
backButton.addEventListener("click", () => {
  // Change the URL to your portfolio URL
  window.location.href = "../index.html";
});

// Append the back button to the container
backButtonContainer.appendChild(backButton);
