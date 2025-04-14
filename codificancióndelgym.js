document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita que se envíe realmente el formulario
            alert('¡Gracias por tu interés en Fit Woman! Pronto nos pondremos en contacto contigo.');
        });
    }
});
