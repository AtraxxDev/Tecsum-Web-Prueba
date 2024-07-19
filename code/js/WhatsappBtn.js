export function WhatsappBtn() {
    document.addEventListener('DOMContentLoaded', (event) => {
        const whatsappButton = document.querySelector('.whatsapp-button');
        const whatsappPopup = document.querySelector('.whatsapp-popup');
        const defaultMessage = 'Hola! Estuve explorando Tecsum y me interesa saber más sobre las opciones educativas disponibles en este plantel. Me enteré a través de la página.  https://tecsum.edu.mx/ ¡Gracias espero su respuesta!';

        whatsappButton.addEventListener('click', () => {
            const whatsappIcon = whatsappButton.querySelector('img');

            if (whatsappPopup.classList.contains('show')) {
                whatsappPopup.classList.remove('show');
                whatsappIcon.src = 'https://tecsum.edu.mx/Images/Iconos/Redes_Sociales/Whatsapp.webp';
                whatsappIcon.classList.remove('rotate-icon');
                whatsappIcon.classList.add('rotate-icon', 'reverse'); // Aplicar la animación en reversa
                setTimeout(() => {
                    whatsappPopup.style.display = 'none';
                }, 500); // Espera a que termine la animación
            } else {
                whatsappPopup.style.display = 'block';
                setTimeout(() => {
                    whatsappPopup.classList.add('show');
                    whatsappIcon.src = 'https://tecsum.edu.mx/Images/Iconos/Redes_Sociales/Close-X.webp';
                    whatsappIcon.classList.remove('rotate-icon', 'reverse'); // Asegúrate de eliminar cualquier clase de rotación anterior
                    whatsappIcon.classList.add('rotate-icon'); // Aplicar la animación normal
                }, 10); // Permite un pequeño retraso para la transición
            }
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.whatsapp-button') && !event.target.closest('.whatsapp-popup')) {
                const whatsappIcon = whatsappButton.querySelector('img');
                whatsappPopup.classList.remove('show');
                whatsappIcon.src = 'https://tecsum.edu.mx/Images/Iconos/Redes_Sociales/Whatsapp.webp';
                whatsappIcon.classList.remove('rotate-icon');
                whatsappIcon.classList.add('rotate-icon', 'reverse'); // Aplicar la animación en reversa
                setTimeout(() => {
                    whatsappPopup.style.display = 'none';
                }, 500); // Espera a que termine la animación
            }
        });

        // Agregar evento de clic para los enlaces dentro del popup de WhatsApp
        const whatsappLinks = document.querySelectorAll('.Horizontal-card');
        whatsappLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
                const phoneNumber = link.getAttribute('data-phone');
                const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

                // Abrir la URL en una nueva ventana
                window.open(url, '_blank');
            });
        });
    });
}
