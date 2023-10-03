//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});
// Email Handling

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const messag = formData.get("message");

    // Send confirmation email using Email.js (replace with your credentials)
    emailjs.init("nrFcNeZfOcwEQT9P3");

    const emailParams = {
      to_email: "williamhanspierce@gmail.com", // Replace with your email
      from_name: name,
      from_email: email,
      message: messag,
    };

    emailjs
      .send("service_q6ah7b7", "template_tpup2a1", emailParams)
      .then(function (response) {
        alert(
          "Thank you for reaching out, I will get back to you as soon as possible!."
        );
        form.reset();
      })
      .catch(function (error) {
        console.error("Email sending failed:", error);
      });
  });
});
