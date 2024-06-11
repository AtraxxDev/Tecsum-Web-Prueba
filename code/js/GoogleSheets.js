const scriptURLs = {
    "Naucalpan": 'https://script.google.com/macros/s/AKfycbyZDF5IssVhXGQUyPN4FvqWkp4EQAUu7mKYG7lza4JBZecAXsOoSOpwVNZMYe8Tr1gLnA/exec',
    "Tlalnepantla": 'https://script.google.com/macros/s/AKfycbzmYppJpw69xkiSpzicvsxyV1Jb0fOZDQ3EXL2WVW4Vq6oHGzcqtUNwtRKsaV1J6Ki72A/exec',
    "Nicolás Romero": 'https://script.google.com/macros/s/AKfycbwP0qujHDYU3JLvWhcbu9RwX8yXBGhulQyQrRN4jKu0_hq5wWH37gJCRUg14ItQVnDswg/exec'
};

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();

    // Obtener la fecha y hora actual
    const currentDate = new Date();

    // Formatear la fecha en formato dd/mm/yyyy
    const formattedDate = formatDate(currentDate);

    // Formatear la hora en formato de 12 horas con AM o PM
    const formattedTime = formatAMPM(currentDate);

    // Agregar la fecha y hora formateadas al formulario antes de enviarlo
    form['fecha'].value = formattedDate;
    form['hora'].value = formattedTime;

    const carreraSelect = document.getElementById('carrera');
    const selectedCarrera = carreraSelect.options[carreraSelect.selectedIndex].text;

    const formData = new FormData(form);
    formData.set('carrera', selectedCarrera);

    // Obtener el valor del plantel seleccionado
    const plantelSelect = document.getElementById('plantel');
    const selectedPlantel = plantelSelect.options[plantelSelect.selectedIndex].value;

    // Obtener la URL del script correspondiente al plantel seleccionado
    const scriptURL = scriptURLs[selectedPlantel];

    // Enviar los datos del formulario a la URL del script correspondiente
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (response.ok) {
                const myModal = new bootstrap.Modal(document.getElementById('formModal'), {
                    keyboard: false
                });
                myModal.show();
                form.reset(); // Restablecer el formulario después de enviarlo correctamente
                console.log("Se envió")
            } else {
                alert('Error al enviar el formulario');
            }
        })
        .catch(error => console.error("Error!", error.message));
});

// Función para formatear la fecha en formato dd/mm/yyyy
function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Función para formatear la hora en formato de 12 horas con AM o PM
function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // El reloj de 12 horas comienza a las 12 AM
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
