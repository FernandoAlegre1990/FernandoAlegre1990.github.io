// Seleccionamos los elementos para el modo oscuro (ya existente)
const modeButton = document.getElementById('mode-button');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;
let darkMode = false;

// Función para alternar entre temas
function toggleMode() {
  darkMode = !darkMode;
  if (darkMode) {
    body.classList.add('dark-mode');
    modeIcon.textContent = '🌙'; // Cambia el ícono a la luna
  } else {
    body.classList.remove('dark-mode');
    modeIcon.textContent = '☀️'; // Cambia el ícono al sol
  }
}

// Escuchamos el clic en el botón para alternar el modo
modeButton.addEventListener('click', toggleMode);

// --- Menú responsive ---

// Seleccionar el botón de menú y los enlaces
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Alternar visibilidad del menú en móviles
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


