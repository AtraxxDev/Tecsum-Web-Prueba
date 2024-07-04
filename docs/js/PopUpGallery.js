export function PopUpGallery(){
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.image').forEach(image => {
          image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'flex';
            document.querySelector('.popup-image img').src = image.src;
          };
        });
    
        document.querySelector('.popup-image span').onclick = () => {
          document.querySelector('.popup-image').style.display = 'none';
        };
      });
}