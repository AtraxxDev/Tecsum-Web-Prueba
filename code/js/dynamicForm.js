export function initializeForm() {
    document.addEventListener('DOMContentLoaded', function () {
        const carrerasPorPlantel = {
            'Naucalpan': [
                { value: 'Enfermería General', text: 'Enfermería General' },
                { value: 'Contabilidad', text: 'Contabilidad' },
                { value: 'Programación', text: 'Programación' },
                { value: 'Diseño Publicitario', text: 'Diseño Publicitario' },
                { value: 'Asistente Educativo', text: 'Asistente Educativo' },
                { value: 'Gastronomía', text: 'Gastronomía' },
                { value: 'Belleza', text: 'Belleza' }
            ],
            'Tlalnepantla': [
                { value: 'Enfermería General', text: 'Enfermería General' },
                { value: 'Contabilidad', text: 'Contabilidad' },
                { value: 'Programación', text: 'Programación' },
                { value: 'Diseño Publicitario', text: 'Diseño Publicitario' }
            ],
            'Nicolás Romero': [
                { value: 'Enfermería General', text: 'Enfermería General' },
                { value: 'Contabilidad', text: 'Contabilidad' },
                { value: 'Programación', text: 'Programación' },
                { value: 'Diseño Publicitario', text: 'Diseño Publicitario' }
            ]
        };

        const plantelSelect = document.getElementById('plantel');
        const carreraSelect = document.getElementById('carrera');

        plantelSelect.addEventListener('change', function () {
            const selectedPlantel = plantelSelect.value;
            const carreras = carrerasPorPlantel[selectedPlantel] || [];

            // Limpiar las opciones actuales
            carreraSelect.innerHTML = '<option value="" selected>Selecciona una carrera</option>';

            // Añadir las nuevas opciones
            carreras.forEach(carrera => {
                const option = document.createElement('option');
                option.value = carrera.value;
                option.text = carrera.text;
                carreraSelect.appendChild(option);
            });
        });

    });
}
