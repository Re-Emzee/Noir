const scripts = [
  "utils.js",
  "bookmarks.js",
  "profiles.js",
  "search.js",
  "clock.js",
];

scripts.forEach((script) => {
  const scriptTag = document.createElement("script");
  scriptTag.src = `js/${script}`;
  scriptTag.type = "module";
  document.body.appendChild(scriptTag);
});
