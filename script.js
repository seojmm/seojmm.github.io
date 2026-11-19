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

const emailButton = document.querySelector("[data-email]");
const copyStatus = document.querySelector(".copy-status");
let statusTimeout;

emailButton.addEventListener("click", async () => {
  const address = emailButton.dataset.email;
  let copied = false;
  clearTimeout(statusTimeout);
  try {
    await navigator.clipboard.writeText(address);
    copied = true;
  } catch {
    // Select the visible address so it can also be copied manually.
    copyStatus.textContent = address;
    const range = document.createRange();
    range.selectNodeContents(copyStatus);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copied = document.execCommand("copy");
    if (copied) selection.removeAllRanges();
  }
  if (copied) {
    copyStatus.textContent = "copied!";
    statusTimeout = setTimeout(() => {
      copyStatus.textContent = "";
    }, 2200);
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
menuToggle.hidden = false;
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
});
document.addEventListener("click", (event) => {
  if (!siteHeader.contains(event.target) || event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
siteHeader.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.focus();
  }
});
