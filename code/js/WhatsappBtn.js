export function WhatsappBtn() {
    document.addEventListener('DOMContentLoaded', () => {
        const fabButton = document.querySelector('.fab-button');
        const fabMenu = document.querySelector('.fab-menu');
        const defaultMessage = 'Hola! Estuve explorando Tecsum y me interesa saber más sobre las opciones educativas disponibles en este plantel. Me enteré a través de la página.  https://tecsum.edu.mx/ ¡Gracias espero su respuesta!';

        // Función para mostrar el menú
        function showMenu() {
            fabMenu.style.display = 'flex'; // Asegúrate de que esté visible
            setTimeout(() => {
                fabMenu.classList.add('show');
                const fabIcon = fabButton.querySelector('img');
                fabIcon.src = 'https://tecsum.edu.mx/Images/Iconos/Redes_Sociales/Close-X.webp'; // Cambia al icono de cierre
                fabIcon.classList.remove('rotate-icon', 'reverse');
                fabIcon.classList.add('rotate-icon');
            }, 10); // Permite la transición
        }

        // Función para ocultar el menú
        function hideMenu() {
            fabMenu.classList.remove('show');
            const fabIcon = fabButton.querySelector('img');
            fabIcon.src = 'https://tecsum.edu.mx/Images/Iconos/Redes_Sociales/Whatsapp.webp'; // Cambia al icono original
            fabIcon.classList.remove('rotate-icon');
            fabIcon.classList.add('rotate-icon', 'reverse');
            setTimeout(() => {
                fabMenu.style.display = 'none'; // Oculta después de la animación
            }, 300); // Asegúrate de que coincide con la duración de la transición
        }

        fabButton.addEventListener('click', () => {
            if (fabMenu.classList.contains('show')) {
                hideMenu();
            } else {
                showMenu();
            }
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.fab') && !event.target.closest('.fab-menu')) {
                hideMenu();
            }
        });

        const fabMenuItems = document.querySelectorAll('.fab-menu-item');
        fabMenuItems.forEach(item => {
            item.addEventListener('click', (event) => {
                const phoneNumber = item.getAttribute('data-phone');
                const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

                window.open(url, '_blank');
            });
        });
    });
}
