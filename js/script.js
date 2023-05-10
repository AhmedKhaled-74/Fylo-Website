const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleIconDark = document.getElementById("theme-toggle-icon-dark");
const themeToggleIconLight = document.getElementById("theme-toggle-icon-light");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleIconLight.classList.remove("hidden");
} else {
  themeToggleIconDark.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  themeToggleIconDark.classList.toggle("hidden");
  themeToggleIconLight.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
