import { saveToStorage, loadFromStorage } from "./utils.js";

const profiles = {};

// Load profiles
function loadProfiles() {
  loadFromStorage("profiles", (storedProfiles) => {
    Object.assign(profiles, storedProfiles);
    renderProfiles();
  });
}

// Render profiles in the UI
function renderProfiles() {
  const profilesList = document.getElementById("profiles-list");
  profilesList.innerHTML = "";

  for (const [keyword, urls] of Object.entries(profiles)) {
    const li = document.createElement("li");
    li.textContent = keyword;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editProfile(keyword);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteProfile(keyword);

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    profilesList.appendChild(li);
  }
}

// Add or edit a profile
function editProfile(keyword = "") {
  const newKeyword = prompt("Enter keyword:", keyword);
  if (!newKeyword) return;

  const urls = prompt(
    "Enter URLs (comma-separated):",
    profiles[newKeyword]?.join(",") || "",
  );
  if (!urls) return;

  profiles[newKeyword] = urls.split(",").map((url) => url.trim());
  saveToStorage("profiles", profiles);
  renderProfiles();
}

// Delete a profile
function deleteProfile(keyword) {
  delete profiles[keyword];
  saveToStorage("profiles", profiles);
  renderProfiles();
}

// Handle keyword input
export function handleKeywordInput(query) {
  if (profiles[query]) {
    profiles[query].forEach((url) => {
      window.open(url, "_blank");
    });
    return true; // Profile keyword handled
  }
  return false; // No matching profile keyword
}

document
  .getElementById("add-profile-btn")
  .addEventListener("click", () => editProfile());
loadProfiles();
