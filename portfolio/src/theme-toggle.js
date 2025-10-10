// theme-toggle.js
// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.getElementById("theme-toggle");
//   toggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
//   });
// });

// Applies the saved theme when the page loads
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", savedTheme === "dark");
}

// Adds toggle functionality and saves theme choice
function setupThemeToggle() {
  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) return; // wait until navbar is loaded

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });
}

// Run theme setup early (before navbar is loaded)
initializeTheme();
