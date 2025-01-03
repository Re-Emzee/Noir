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

// Load bookmarks
chrome.bookmarks.getTree((bookmarkTreeNodes) => {
  const bookmarksList = document.getElementById("bookmarks-list");
  function processBookmarks(nodes) {
    nodes.forEach((node) => {
      if (node.url) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = node.url;
        a.textContent = node.title;
        a.target = "_blank";
        li.appendChild(a);
        bookmarksList.appendChild(li);
      }
      if (node.children) {
        processBookmarks(node.children);
      }
    });
  }
  processBookmarks(bookmarkTreeNodes);
});
