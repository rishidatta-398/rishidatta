/* Theme toggle. Remembers the choice, falls back to the OS setting. */
(function () {
  var KEY = "rd-theme";
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function label(theme) {
    return theme === "dark" ? "Light" : "Dark";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.querySelector(".themer");
    if (btn) {
      btn.textContent = label(theme);
      btn.setAttribute("aria-label", "Switch to " + label(theme).toLowerCase() + " mode");
    }
  }

  var initial = stored();
  if (!initial) {
    initial = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  apply(initial);

  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-theme") || "light");
    var btn = document.querySelector(".themer");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  });
})();
