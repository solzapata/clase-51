// // Hacer ejercicios de estudiantes acá
// estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido
const estudiantesPorHechizo = (hechizo, estudiantes) => {
    const porHechizo = estudiante => estudiante.hechizoPreferido === hechizo;    //funcion que tiene la condicion para filter (estudiantes cuyo hechizo preferido -key- son iguales al hechizo que pase en el parametro)
    const estudiantesFiltrados = estudiantes.filter(porHechizo);                //filtro estudiantes que cumplan la condicion

    return estudiantesFiltrados;
}



// estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro.
const estudiantesConMasAmiguesQue = (x, estudiantes) => {
    const porAmigues = estudiante => estudiante.amigues.length >= x;    //funcion q busca estudiantes q tengan amigues (array) con determinado length
    const estudiantesConAmiguesFiltrados = estudiantes.filter(porAmigues);  //condicion

    return estudiantesConAmiguesFiltrados;
}



//estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro
const estudiantesConFamiliares = (familiares, estudiantes) => {
    const porFamiliares = estudiante => familiares.includes(estudiante.familiar);   //estudiantes cuyo familiar este incluido en el array d familiares q paso como parametro
    const estudiantesConFamiliaresFiltrados = estudiantes.filter(porFamiliares);    //estudiantes q cumplan condicion

    return estudiantesConFamiliaresFiltrados;
}



//obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias
const obtenerPromedioDeEstudiante = estudiantes => {
    const estudianteAleatorio = estudiantes[Math.round(Math.random()*100)]

    let promedios = [];
    for(let i = 0; i < estudianteAleatorio.materias.length; i++){
        promedios.push(estudianteAleatorio.materias[i].promedio)
    }

    const sumaDeMaterias = (sumaParcial, actual) => sumaParcial + actual;
    const sumatoria = promedios.reduce(sumaDeMaterias);

    return `El promedio total de ${estudianteAleatorio.nombreCompleto.nombre} ${estudianteAleatorio.nombreCompleto.apellido} es ${sumatoria / estudianteAleatorio.materias.length}`
}
