
// 2. Mostrar alerta cuando se hace clic en un botón de inscripción
document.addEventListener('DOMContentLoaded', function () {
    const botonesInscribirse = document.querySelectorAll('.btn');

    botonesInscribirse.forEach(btn => {
        // Comprobar si el botón contiene palabras relacionadas a inscripción
        if (btn.textContent.toLowerCase().includes('inscrib')) {
            btn.addEventListener('click', function (e) {
                e.preventDefault(); // Evita el salto del enlace
                alert('¡Gracias por tu interés en Fit Woman! Pronto nos pondremos en contacto contigo.');
            });
        }
    });
});
