const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "block" ? "none" : "block";
});


const greetingEl = document.getElementById("greeting");

const hour = new Date().getHours();
let greetingText = "Hello";

if (hour >= 5 && hour < 12) {
  greetingText = "Good Morning";
} else if (hour >= 12 && hour < 17) {
  greetingText = "Good Afternoon";
} else if (hour >= 17 && hour < 21) {
  greetingText = "Good Evening";
} else {
  greetingText = "Good Night";
}

greetingEl.innerHTML = `${greetingText}<span>.</span>`;
