export function initializeForm() {
    document.addEventListener('DOMContentLoaded', function () {
        const carrerasPorPlantel = {
            'Naucalpan': {
                bachilleratos: [
                    { value: 'Enfermería General', text: 'Enfermería General' },
                    { value: 'Contabilidad', text: 'Contabilidad' },
                    { value: 'Programación', text: 'Programación' },
                    { value: 'Diseño Publicitario', text: 'Diseño Publicitario' }
                ],
                especialidades: [
                    { value: 'Asistente Educativo', text: 'Asistente Educativo' },
                    { value: 'Belleza', text: 'Belleza' },
                    { value: 'Contabilidad', text: 'Contabilidad' },
                    { value: 'Dibujo-Publicitario', text: 'Dibujo Publicitario' },
                    { value: 'Gastronomía', text: 'Gastronomía' },
                    { value: 'Inglés', text: 'Inglés' },
                    { value: 'Mtto. de Computadoras', text: 'Mtto. de Computadoras' },
                    { value: 'Programación', text: 'Programación' }
                ]
            },
            'Tlalnepantla': {
                bachilleratos: [
                    { value: 'Enfermería General', text: 'Enfermería General' },
                    { value: 'Contabilidad', text: 'Contabilidad' },
                    { value: 'Programación', text: 'Programación' },
                    { value: 'Diseño Publicitario', text: 'Diseño Publicitario' }
                ],
                especialidades: []
            }
       
            // 'Nicolás Romero': [
            //     { value: 'Enfermería General', text: 'Enfermería General' },
            //     { value: 'Contabilidad', text: 'Contabilidad' },
            //     { value: 'Programación', text: 'Programación' },
            //     { value: 'Diseño Publicitario', text: 'Diseño Publicitario' }
            // ]
        };

        const plantelSelect = document.getElementById('plantel');
        const carreraSelect = document.getElementById('carrera');

        plantelSelect.addEventListener('change', function () {
            const selectedPlantel = plantelSelect.value;
            const carreras = carrerasPorPlantel[selectedPlantel] || { bachilleratos: [], especialidades: [] };

            // Limpiar las opciones actuales
            carreraSelect.innerHTML = '<option value="" selected disabled>Selecciona una carrera</option>';

            // Crear y añadir grupos de opciones
            if (carreras.bachilleratos.length > 0) {
                const optgroupBachilleratos = document.createElement('optgroup');
                optgroupBachilleratos.label = 'Bachilleratos';
                carreras.bachilleratos.forEach(carrera => {
                    const option = document.createElement('option');
                    option.value = carrera.value;
                    option.text = carrera.text;
                    optgroupBachilleratos.appendChild(option);
                });
                carreraSelect.appendChild(optgroupBachilleratos);
            }

            if (carreras.especialidades.length > 0) {
                const optgroupEspecialidades = document.createElement('optgroup');
                optgroupEspecialidades.label = 'Especialidades';
                carreras.especialidades.forEach(carrera => {
                    const option = document.createElement('option');
                    option.value = carrera.value;
                    option.text = carrera.text;
                    optgroupEspecialidades.appendChild(option);
                });
                carreraSelect.appendChild(optgroupEspecialidades);
            }


        });

    });
}
