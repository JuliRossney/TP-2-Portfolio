function toggleModo() {
  const body = document.body;
  const boton = document.getElementById("modo-btn");
  const icono = boton.querySelector("i");

  body.classList.toggle("dark-mode");

  // Cambiar clase del ícono
  if (body.classList.contains("dark-mode")) {
    icono.classList.remove("fa-moon");
    icono.classList.add("fa-sun");
  } else {
    icono.classList.remove("fa-sun");
    icono.classList.add("fa-moon");
  }

  localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
}

window.onload = function () {
  const modoOscuro = localStorage.getItem("dark-mode") === "true";
  const boton = document.getElementById("modo-btn");
  const icono = boton.querySelector("i");

  if (modoOscuro) {
    document.body.classList.add("dark-mode");
    icono.classList.remove("fa-moon");
    icono.classList.add("fa-sun");
  } else {
    icono.classList.remove("fa-sun");
    icono.classList.add("fa-moon");
  }
};
