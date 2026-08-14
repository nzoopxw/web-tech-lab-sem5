

(function () {
  "use strict";

  var root = document.documentElement;          
  var button = document.getElementById("theme-toggle");

  if (!button) {
    return;
  }

  button.addEventListener("click", function () {
    var isDark = root.classList.toggle("dark");

    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    button.setAttribute("aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme");
    button.title = isDark ? "Switch to light theme" : "Switch to dark theme";
  });
})();
