// Keep the same CV section when switching between KO and EN.
// The pages and language links also work with JavaScript disabled.
document.querySelectorAll(".language-switch a").forEach((link) => {
  link.addEventListener("click", () => {
    link.hash = window.location.hash;
  });
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
