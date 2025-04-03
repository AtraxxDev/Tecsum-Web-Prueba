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
                        { value: 'Gastronomía', text: 'Gastronomía' }
                    ],

                },
                // cursos: {
                //     regulares: [
                //         { value: 'Curso 1', text: 'Curso 1' },
                //         { value: 'Curso 2', text: 'Curso 2' },
                //         { value: 'Curso 5', text: 'Curso 5' },
                //         { value: 'Curso 6', text: 'Curso 6' },
                //         { value: 'Curso 7', text: 'Curso 7' }
                //     ],
                //     // El apartado diplomados ha sido eliminado aquí
                // },
                especialidades: [
                    { value: 'Asistente Educativo', text: 'Asistente Educativo' },
                    { value: 'Inglés', text: 'Inglés' },
                    { value: 'Gastronomía', text: 'Gastronomía' },
                    { value: 'Dibujo Publicitario', text: 'Dibujo Publicitario' },
                    { value: 'Cultora de Belleza', text: 'Cultora de Belleza' },
                    { value: 'Contabilidad', text: 'Contabilidad' },
                    { value: 'Programación', text: 'Programación' },
                    { value: 'Mtto. de Computadoras', text: 'Mtto. de Computadoras' }
                ],

                licenciaturas: [
                    { value: 'Psicopedagogía', text: 'Psicopedagogía' },
                    { value: 'Arquitectura', text: 'Arquitectura' },
                    { value: 'Mercadotecnia Digital', text: 'Mercadotecnia Digital' },
                    { value: 'Administración', text: 'Administración' },
                    { value: 'Criminalística', text: 'Criminalística' },
                    { value: 'Contaduría', text: 'Contaduría' },
                    { value: 'Negocios Internacionales', text: 'Negocios Internacionales' },
                    { value: 'Ingeniería Mecatrónica', text: 'Ingeniería Mecatrónica' },
                    { value: 'Ingeniería en Sistemas Computacionales', text: 'Ingeniería en Sistemas Computacionales' }
                ],


                
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
                // cursos: {
                //     regulares: [
                //         { value: 'Curso 3', text: 'Curso 3' },
                //         { value: 'Curso 4', text: 'Curso 4' },
                //         { value: 'Curso 8', text: 'Curso 8' },
                //         { value: 'Curso 9', text: 'Curso 9' },
                //         { value: 'Curso 10', text: 'Curso 10' }
                //     ],
                   
                // },
                especialidades: [],
                licenciaturas: [
                    { value: 'Psicopedagogía', text: 'Psicopedagogía' },
                    { value: 'Arquitectura', text: 'Arquitectura' },
                    { value: 'Mercadotecnia Digital', text: 'Mercadotecnia Digital' },
                    { value: 'Administración', text: 'Administración' },
                    { value: 'Criminalística', text: 'Criminalística' },
                    { value: 'Contaduría', text: 'Contaduría' },
                    { value: 'Negocios Internacionales', text: 'Negocios Internacionales' },
                    { value: 'Ingeniería Mecatrónica', text: 'Ingeniería Mecatrónica' },
                    { value: 'Ingeniería en Sistemas Computacionales', text: 'Ingeniería en Sistemas Computacionales' }
                ],

            }
        };

        const plantelSelect = document.getElementById('plantel');
        const ofertaSelect = document.getElementById('oferta');
        const carreraSelect = document.getElementById('carrera');

    
        plantelSelect.addEventListener('change', function () {
            const selectedPlantel = plantelSelect.value;
            const ofertas = carrerasPorPlantel[selectedPlantel] || {
                bachilleratos: { tecnologicos: [], diplomados: [] },
                cursos: { regulares: [] },
                especialidades: [],
                licenciaturas: []
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
                option.value = 'Especialidad';
                option.text = 'Especialidades/Diplomados';
                ofertaSelect.appendChild(option);
            }

            if (ofertas.licenciaturas.length > 0) {
                const option = document.createElement('option');
                option.value = 'licenciaturas';
                option.text = 'Licenciaturas / Ingenierías';
                ofertaSelect.appendChild(option);
            }

            // if (ofertas.cursos.regulares.length > 0) {
            //     const option = document.createElement('option');
            //     option.value = 'cursos';
            //     option.text = 'Cursos';
            //     ofertaSelect.appendChild(option);
            // }
        });

        ofertaSelect.addEventListener('change', function () {
            const selectedPlantel = plantelSelect.value;
            const selectedOferta = ofertaSelect.value;
        
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
            } else if (selectedOferta === 'licenciaturas') {
                const licenciaturas = carrerasPorPlantel[selectedPlantel].licenciaturas;
                if (licenciaturas.length > 0) {
                    const optgroupLicenciaturas = document.createElement('optgroup');
                    optgroupLicenciaturas.label = 'Licenciaturas / Ingenierías';
                    licenciaturas.forEach(carrera => {
                        const option = document.createElement('option');
                        option.value = carrera.value;
                        option.text = carrera.text;
                        optgroupLicenciaturas.appendChild(option);
                    });
                    carreraSelect.appendChild(optgroupLicenciaturas);
                }
            } else if (selectedOferta === 'Especialidad') {
                const especialidades = carrerasPorPlantel[selectedPlantel].especialidades;
                const optgroupEspecialidades = document.createElement('optgroup');
                optgroupEspecialidades.label = 'Especialidades/Diplomados';
                especialidades.forEach(carrera => {
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
