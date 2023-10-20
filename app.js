let panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClas();
    panel.classList.add("active");
  });
});

function removeClas() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
