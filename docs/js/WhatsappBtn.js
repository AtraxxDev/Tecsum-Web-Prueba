export function WhatsappBtn() {
    document.addEventListener('DOMContentLoaded', () => {
        const flabButton = document.querySelector('.flab-button');
        const flabMenu = document.querySelector('.flab-menu');
        const defaultMessage = 'Hola! Estuve explorando Tecsum y me interesa saber más sobre las opciones educativas disponibles en este plantel. Me enteré a través de la página.  https://tecsum.edu.mx/ ¡Gracias espero su respuesta!';

        // Función para mostrar el menú
        function showMenu() {
            flabMenu.style.display = 'flex'; // Asegúrate de que esté visible
            setTimeout(() => {
                flabMenu.classList.add('show');
                const flabIcon = flabButton.querySelector('img');
                flabIcon.src = '/Tecsum-Web-Prueba/img/Iconos/Redes_Sociales/Close-X.webp'; // Cambia al icono de cierre
                flabIcon.classList.remove('rotate-icon', 'reverse');
                flabIcon.classList.add('rotate-icon');
            }, 10); // Permite la transición
        }

        // Función para ocultar el menú
        function hideMenu() {
            flabMenu.classList.remove('show');
            const flabIcon = flabButton.querySelector('img');
            flabIcon.src = '/Tecsum-Web-Prueba/img/Iconos/Redes_Sociales/Whatsapp.webp'; // Cambia al icono original
            flabIcon.classList.remove('rotate-icon');
            flabIcon.classList.add('rotate-icon', 'reverse');
            setTimeout(() => {
                flabMenu.style.display = 'none'; // Oculta después de la animación
            }, 300); // Asegúrate de que coincide con la duración de la transición
        }

        flabButton.addEventListener('click', () => {
            if (flabMenu.classList.contains('show')) {
                hideMenu();
            } else {
                showMenu();
            }
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.flab') && !event.target.closest('.flab-menu')) {
                hideMenu();
            }
        });

        const flabMenuItems = document.querySelectorAll('.flab-menu-item');
        flabMenuItems.forEach(item => {
            item.addEventListener('click', (event) => {
                const phoneNumber = item.getAttribute('data-phone');
                const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

                // 🔹 Evento de conversión de Google Ads:
                // 🔹 Disparar conversión de clic en WhatsApp
                 gtag('event', 'conversion', {
                'send_to': 'AW-16973495648/_LIHCNX2qbMaEOD6y50_',
                });


                window.open(url, '_blank');
            });
        });
    });
}
