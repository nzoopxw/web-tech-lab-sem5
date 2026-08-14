
(function () {
  "use strict";

  var root = document.documentElement;       
  var button = document.getElementById("theme-toggle");

  if (!button) {
    return;
  }

  function applyTheme(theme) {
    var isDark = (theme === "dark");

    root.setAttribute("data-theme", theme);

    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    if (isDark) {
      button.setAttribute("aria-label", "Switch to light theme");
      button.title = "Switch to light theme";
    } else {
      button.setAttribute("aria-label", "Switch to dark theme");
      button.title = "Switch to dark theme";
    }
  }

  button.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var next;

    if (current === "dark") {
      next = "light";
    } else {
      next = "dark";
    }

    applyTheme(next);
  });
})();
