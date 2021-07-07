"use strict";

var hamburgerButtonElement = document.querySelector("#hamburgerButton");
var menuElement = document.querySelector(".menu");
var rightAppMain = document.querySelector(".right_app");
var shadowELement = document.querySelector(".shadow"); // leftArrowButton.addEventListener("click", () => {
//     rightAppMain.classList.add("chat-hidden")
//     shadowELement.classList.add("shadowHidden")
//  })

shadowELement.addEventListener("click", function (evt) {
  // menuElement.classList.add("hidden")
  shadowELement.classList.toggle("shadowHidden"); // settingsModalElement.classList.add("settingsHidden")

  menuElement.style.transform = "translateX(0)";
  chatModal.classList.add('chatHidden');
});
hamburgerButtonElement.addEventListener("click", function (evt) {
  menuElement.classList.remove("hidden");
  shadowELement.classList.remove("shadowHidden");
  menuElement.style.transform = "translateX(0)";
});