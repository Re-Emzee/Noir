// Dynamically load navbar.html into each page
document.addEventListener("DOMContentLoaded", async () => {
  const headerContainer = document.createElement("div");
  document.body.prepend(headerContainer);

  try {
    const response = await fetch("./src/navbar.html");
    const html = await response.text();
    headerContainer.innerHTML = html;

    // After loading navbar, reinitialize theme and toggle behavior
    initializeTheme();
    setupThemeToggle();
  } catch (err) {
    console.error("Failed to load navbar:", err);
  }
});
