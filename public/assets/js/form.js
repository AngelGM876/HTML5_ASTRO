// Fragmento: Inicialización y selección de elementos
// Este bloque obtiene referencias al formulario, checkbox y botones.
const form = document.getElementById('contact-form');
const checkbox = form.querySelector('input[type="checkbox"]');
const btns = form.querySelectorAll('button');
const statusEl = document.getElementById('form-status');


// Fragmento: Habilitar/deshabilitar botones según checkbox
// Cuando el usuario marca la casilla de términos, activamos los botones del formulario.
function toggleButtons(enabled) {
  for (const btn of btns) {
    btn.disabled = !enabled;
  }
}

// Inicial: asegurar estado consistente al cargar la página
toggleButtons(false);

checkbox.addEventListener('change', function () {
  toggleButtons(this.checked);
});


// Fragmento: Validación simple y envío (simulado)
// Al enviar evitamos la recarga, validamos campos requeridos y mostramos feedback.
form.addEventListener('submit', function (ev) {
  ev.preventDefault();

  const requiredFields = Array.from(form.querySelectorAll('[required]'));
  const invalid = requiredFields.filter((el) => !el.value.trim());

  if (invalid.length > 0) {
    statusEl.textContent = 'Por favor completa los campos requeridos.';
    statusEl.style.color = 'var(--red)';
    invalid[0].focus();
    return;
  }

  // Aquí iría la llamada real a la API. Para la demo simulamos éxito.
  statusEl.textContent = 'Enviando...';
  statusEl.style.color = 'inherit';

  // Simular latencia y resultado exitoso
  setTimeout(() => {
    statusEl.textContent = '¡Mensaje enviado correctamente! Gracias por contactarme.';
    statusEl.style.color = 'limegreen';
    // Opcional: deshabilitar para evitar reenvíos
    toggleButtons(false);
    checkbox.checked = false;
  }, 700);
});


// Fragmento: Reset personalizado
// Al resetear devolvemos el estado inicial y limpiamos mensajes.
form.addEventListener('reset', function () {
  setTimeout(() => {
    statusEl.textContent = '';
    toggleButtons(false);
    checkbox.checked = false;
  }, 0);
});
