import { handleKeywordInput } from "./profiles.js";

document.getElementById("search-btn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const query = document.getElementById("search-bar").value.trim();
  if (!query) return;

  // Check if the query matches a profile keyword
  const profileMatched = handleKeywordInput(query);

  // Only perform Google search if no profile matches
  //if (!profileMatched) {
  //  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  // }
});
