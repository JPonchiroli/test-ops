import "./commands";

// Disable CSS animations so elements with animate-enter (opacity 0 → 1) are
// immediately visible — prevents flaky "element not visible" timeouts.
Cypress.on("window:before:load", (win) => {
  const style = win.document.createElement("style");
  style.innerHTML =
    "*, *::before, *::after { animation: none !important; transition: none !important; }";
  win.document.head.appendChild(style);
});
