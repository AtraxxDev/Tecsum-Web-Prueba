export function initializeForm() {
    document.addEventListener('DOMContentLoaded', function () {
        const carrerasPorPlantel = {
            'Naucalpan': {
                bachilleratos: {
                    tecnologicos: [
                        { value: 'Enfermería General', text: 'Enfermería General' },
                        { value: 'Contabilidad', text: 'Contabilidad' },
                        { value: 'Programación', text: 'Programación' },
                        { value: 'Diseño Publicitario', text: 'Diseño Publicitario' }
                    ],
                    diplomados: [
                        { value: 'Asistente Educativo', text: 'Asistente Educativo' },
                        { value: 'Belleza', text: 'Belleza' },
                        { value: 'Gastronomia', text: 'Gastronomía' }
                    ]
                },
                cursos: {
                    regulares: [
                        { value: 'Curso 1', text: 'Curso 1' },
                        { value: 'Curso 2', text: 'Curso 2' }
                    ],
                    diplomados: []
                },
                especialidades: [
                    { value: 'Asistente Educativo', text: 'Asistente Educativo' },
                    { value: 'Ingles', text: 'Inglés' },
                    { value: 'Gastronomia', text: 'Gastronomía' },
                    { value: 'Dibujo Publicitario', text: 'Dibujo Publicitario' },
                    { value: 'Cultora de Beleza', text: 'Cultora de Beleza' },
                    { value: 'Contabilidad', text: 'Contabilidad' },
                    { value: 'Programación', text: 'Programación' },
                    { value: 'Reparacion de Computadoras', text: 'Reparacion de Computadoras' }
                ]
            },
            'Tlalnepantla': {
                bachilleratos: {
                    tecnologicos: [
                        { value: 'Enfermería General', text: 'Enfermería General' },
                        { value: 'Contabilidad', text: 'Contabilidad' },
                        { value: 'Programación', text: 'Programación' },
                        { value: 'Diseño Publicitario', text: 'Diseño Publicitario' }
                    ],
                    diplomados: []
                },
                cursos: {
                    regulares: [
                        { value: 'Curso 3', text: 'Curso 3' },
                        { value: 'Curso 4', text: 'Curso 4' }
                    ],
                    diplomados: [
                        { value: 'Asistente Educativo', text: 'Asistente Educativo' },
                        { value: 'Ingles', text: 'Inglés' },
                        { value: 'Gastronomia', text: 'Gastronomía' },
                        { value: 'Dibujo Publicitario', text: 'Dibujo Publicitario' },
                        { value: 'Cultora de Beleza', text: 'Cultora de Beleza' },
                        { value: 'Contabilidad', text: 'Contabilidad' },
                        { value: 'Programación', text: 'Programación' },
                        { value: 'Reparacion de Computadoras', text: 'Reparacion de Computadoras' }
                    ]
                },
                especialidades: []
            }
        };

        const plantelSelect = document.getElementById('plantel');
        const ofertaSelect = document.getElementById('oferta');
        const carreraSelect = document.getElementById('carrera');

        plantelSelect.addEventListener('change', function () {
            const selectedPlantel = plantelSelect.value;
            const ofertas = carrerasPorPlantel[selectedPlantel] || {
                bachilleratos: { tecnologicos: [], diplomados: [] },
                cursos: { regulares: [], diplomados: [] },
                especialidades: []
            };

            // Limpiar las opciones actuales
            ofertaSelect.innerHTML = '<option value="" selected disabled>Selecciona una oferta educativa</option>';
            carreraSelect.innerHTML = '<option value="" selected disabled>Selecciona una carrera</option>';

            // Crear y añadir grupos de opciones en el select de oferta educativa
            if (ofertas.bachilleratos.tecnologicos.length > 0 || ofertas.bachilleratos.diplomados.length > 0) {
                const option = document.createElement('option');
                option.value = 'bachilleratos';
                option.text = 'Bachilleratos';
                ofertaSelect.appendChild(option);
            }


            if (ofertas.especialidades.length > 0) {
                const option = document.createElement('option');
                option.value = 'especialidades';
                option.text = 'Especialidades';
                ofertaSelect.appendChild(option);
            }

            
            if (ofertas.cursos.regulares.length > 0 || ofertas.cursos.diplomados.length > 0) {
                const option = document.createElement('option');
                option.value = 'cursos';
                option.text = 'Cursos y Diplomados';
                ofertaSelect.appendChild(option);
            }
        });

        ofertaSelect.addEventListener('change', function () {
            const selectedPlantel = plantelSelect.value;
            const selectedOferta = ofertaSelect.value;
            const carreras = carrerasPorPlantel[selectedPlantel][selectedOferta] || [];

            // Limpiar las opciones actuales del select de carrera
            carreraSelect.innerHTML = '<option value="" selected disabled>Selecciona una carrera</option>';

            // Añadir las nuevas opciones de carrera según la oferta seleccionada
            if (selectedOferta === 'bachilleratos') {
                const bachilleratos = carrerasPorPlantel[selectedPlantel].bachilleratos;
                if (bachilleratos.tecnologicos.length > 0) {
                    const optgroupTecnologicos = document.createElement('optgroup');
                    optgroupTecnologicos.label = 'Bachilleratos Tecnológicos';
                    bachilleratos.tecnologicos.forEach(carrera => {
                        const option = document.createElement('option');
                        option.value = carrera.value;
                        option.text = carrera.text;
                        optgroupTecnologicos.appendChild(option);
                    });
                    carreraSelect.appendChild(optgroupTecnologicos);
                }
                if (selectedPlantel === 'Naucalpan' && bachilleratos.diplomados.length > 0) {
                    const optgroupDiplomados = document.createElement('optgroup');
                    optgroupDiplomados.label = 'Bachilleratos con Diplomados';
                    bachilleratos.diplomados.forEach(carrera => {
                        const option = document.createElement('option');
                        option.value = carrera.value;
                        option.text = carrera.text;
                        optgroupDiplomados.appendChild(option);
                    });
                    carreraSelect.appendChild(optgroupDiplomados);
                }
            } else if (selectedOferta === 'cursos') {
                const cursos = carrerasPorPlantel[selectedPlantel].cursos;
                if (cursos.regulares.length > 0) {
                    const optgroupRegulares = document.createElement('optgroup');
                    optgroupRegulares.label = 'Cursos';
                    cursos.regulares.forEach(carrera => {
                        const option = document.createElement('option');
                        option.value = carrera.value;
                        option.text = carrera.text;
                        optgroupRegulares.appendChild(option);
                    });
                    carreraSelect.appendChild(optgroupRegulares);
                }
                if (cursos.diplomados.length > 0) {
                    const optgroupDiplomados = document.createElement('optgroup');
                    optgroupDiplomados.label = 'Diplomados';
                    cursos.diplomados.forEach(carrera => {
                        const option = document.createElement('option');
                        option.value = carrera.value;
                        option.text = carrera.text;
                        optgroupDiplomados.appendChild(option);
                    });
                    carreraSelect.appendChild(optgroupDiplomados);
                }
            } else {
                carreras.forEach(carrera => {
                    const option = document.createElement('option');
                    option.value = carrera.value;
                    option.text = carrera.text;
                    carreraSelect.appendChild(option);
                });
            }
        });
    });
}
