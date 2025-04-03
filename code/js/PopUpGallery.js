export function PopUpGallery() {
  document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup-image');
    const popupImg = popup.querySelector('img');
    const closeButton = popup.querySelector('.close');
    const prevButton = popup.querySelector('.prev');
    const nextButton = popup.querySelector('.next');

    let images = Array.from(document.querySelectorAll('.image'));
    let currentIndex = 0;

    function showImage(index) {
      if (index >= 0 && index < images.length) {
        popupImg.src = images[index].src;
        currentIndex = index;
        popup.classList.add('active');
      }
    }

    document.querySelectorAll('.image').forEach((image, index) => {
      image.onclick = () => {
        showImage(index);
      };
    });

    closeButton.onclick = () => {
      popup.classList.remove('active');
    };

    popup.onclick = (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        popup.classList.remove('active');
      } else if (e.key === 'ArrowLeft') {
        // Flecha izquierda: mostrar imagen anterior
        showImage(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        // Flecha derecha: mostrar imagen siguiente
        showImage(currentIndex + 1);
      }
    });

    prevButton.onclick = () => {
      showImage(currentIndex - 1);
    };

    nextButton.onclick = () => {
      showImage(currentIndex + 1);
    };

    // Manejo de deslizar en dispositivos táctiles
    let startX, endX;

    popup.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    popup.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        // Deslizamiento hacia la izquierda (siguiente)
        showImage(currentIndex + 1);
      } else if (endX - startX > 50) {
        // Deslizamiento hacia la derecha (anterior)
        showImage(currentIndex - 1);
      }
    });
  });
}
