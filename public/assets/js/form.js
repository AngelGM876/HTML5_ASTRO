// Fragmento: Inicialización y selección de elementos
const form = document.getElementById('contact-form');
const checkbox = form ? form.querySelector('input[type="checkbox"]') : null;
const btns = form ? form.querySelectorAll('button') : [];
const statusEl = document.getElementById('form-status');

if (form) {
    // Fragmento: Habilitar/deshabilitar botones según checkbox
    function toggleButtons(enabled) {
        for (const btn of btns) {
            btn.disabled = !enabled;
        }
    }

    // Inicial: asegurar estado consistente al cargar la página si hay checkbox
    if (checkbox) {
        toggleButtons(false);
        checkbox.addEventListener('change', function () {
            toggleButtons(this.checked);
        });
    }

    // Fragmento: Validación simple y envío (simulado)
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();

        const requiredFields = Array.from(form.querySelectorAll('[required]'));
        const invalid = requiredFields.filter((el) => !el.value.trim());

        if (invalid.length > 0) {
            if (statusEl) {
                statusEl.textContent = 'Por favor completa los campos requeridos.';
                statusEl.style.color = 'var(--red)';
            }
            invalid[0].focus();
            return;
        }

        if (statusEl) {
            statusEl.textContent = 'Enviando...';
            statusEl.style.color = 'inherit';
        }

        // Simular latencia y resultado exitoso
        setTimeout(() => {
            if (statusEl) {
                statusEl.textContent = '¡Mensaje enviado correctamente! Gracias por contactarme.';
                statusEl.style.color = 'limegreen';
            }
            if (checkbox) {
                toggleButtons(false);
                checkbox.checked = false;
            }
        }, 700);
    });

    // Fragmento: Reset personalizado
    form.addEventListener('reset', function () {
        setTimeout(() => {
            if (statusEl) statusEl.textContent = '';
            if (checkbox) {
                toggleButtons(false);
                checkbox.checked = false;
            }
        }, 0);
    });
}
