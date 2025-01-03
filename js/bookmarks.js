import { loadFromStorage } from "./utils.js";

// Display bookmarks
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
