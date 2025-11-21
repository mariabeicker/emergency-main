const toggle = document.getElementById("toggle");
const body = document.getElementById("frontpage");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Opdater knaptekst
  toggle.textContent = body.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
});
