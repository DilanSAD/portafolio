document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    var linkedinURL = 'https://www.linkedin.com/in/dilan-acosta/';

    // Redirigir a LinkedIn con el mensaje
    window.location.href = linkedinURL;
});