function toggleModo() {
  const body = document.body;
  const boton = document.getElementById("modo-btn");

  body.classList.toggle("dark-mode");

  boton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";

  localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
}

window.onload = function () {
  const modoOscuro = localStorage.getItem("dark-mode") === "true";
  const boton = document.getElementById("modo-btn");

  if (modoOscuro) {
    document.body.classList.add("dark-mode");
    boton.textContent = "☀️";
  } else {
    boton.textContent = "🌙";
  }
};
