// Save data to Chrome storage
export function saveToStorage(key, value) {
  chrome.storage.sync.set({ [key]: value });
}

// Load data from Chrome storage
export function loadFromStorage(key, callback) {
  chrome.storage.sync.get(key, (result) => {
    callback(result[key] || {});
  });
}
