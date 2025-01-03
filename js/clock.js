// Display current time and date
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toLocaleDateString();
}
setInterval(updateTime, 1000);
updateTime();

// Google search functionality
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("search-bar").value;
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});
