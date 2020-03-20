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
    const estudianteAleatorio = estudiantes[Math.round(Math.random()*100)];     //elige un estudiante random
    const promedios = materia => materia.promedio;           //funcion que busca los promedios de cada materia
    const sumaDePromedios = (sumaParcial, actual) => sumaParcial + actual;      //funcion q indica que hacer al reduce

    const obtenerPromedioDeEstudiante = estudiantes => {
        const calculoPromedio = estudianteAleatorio.materias.map(promedios).reduce(sumaDePromedios) / estudianteAleatorio.materias.length           //del estudiante random armo una variable con todos los promedios y ejecuto la suma luego divido por el largo p el promedio
        //el map lo uso para armar un array (misma cantidad de items pasado x el callback) con todos los promedios de las materias
     
    return `El promedio total de ${estudianteAleatorio.nombreCompleto.nombre} ${estudianteAleatorio.nombreCompleto.apellido} es ${calculoPromedio}`
}



//estudiantesConPromedioMayorA, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)
const estudiantesConPromedioMayorA = (x, estudiantes) => {
    const porPromedioMayor = estudiante => estudiante.materias.map(promedios).reduce(sumaDePromedios) / estudiante.materias.length > x          //uso estudiante porque quiero sacar todos los estudiantes en un array
    const estudiantesFiltradosPorPromedio = estudiantes.filter(porPromedioMayor);

    return estudiantesFiltradosPorPromedio;
}



//mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6
const porCasa = estudiante => estudiante.casa === casa;    //funcion que busca todos los de una casa
const porPromedioMayorSeis = estudiante => estudiante.materias.map(promedios).reduce(sumaDePromedios) / estudiante.materias.length > 6;

const mejoresEstudiantesPorCasa = (casa, estudiantes) => {
    const filtradosPorCasaYEstudio = estudiantes.filter(porCasa).filter(porPromedioMayorSeis);

    return filtradosPorCasaYEstudio;
}



//casaConMejoresEstudiantes, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)
// const casaConMejoresEstudiantes = estudiantes => {
//     const casaRavenclaw = estudiante => estudiante.casa === 'Ravenclaw';
//     const porCasaRavenclaw = estudiantes.filter(casaRavenclaw).filter(porPromedioMayorSeis);

//     const casaGryffindor = estudiante => estudiante.casa === 'Gryffindor';
//     const porCasaGryffindor = estudiantes.filter(casaGryffindor).filter(porPromedioMayorSeis);

//     const casaSlytherin = estudiante => estudiante.casa === 'Slytherin';
//     const porCasaSlytherin = estudiantes.filter(casaSlytherin).filter(porPromedioMayorSeis);

//     const casaHufflepuff = estudiante => estudiante.casa === 'Hufflepuff';
//     const porCasaHufflepuff = estudiantes.filter(casaHufflepuff).filter(porPromedioMayorSeis);
    
//     if(porCasaRavenclaw.length > porCasaGryffindor.length && porCasaRavenclaw.length > porCasaSlytherin.length && porCasaRavenclaw.length > porCasaHufflepuff.length){
//         return porCasaRavenclaw;
//     } else if(porCasaGryffindor.length > porCasaRavenclaw.length && porCasaGryffindor.length > porCasaSlytherin.length && porCasaGryffindor.length > porCasaHufflepuff.length){
//         return porCasaGryffindor;
//     } else if(porCasaSlytherin.length > porCasaGryffindor.length && porCasaSlytherin.length > porCasaRavenclaw.length && porCasaSlytherin.length > porCasaHufflepuff.length){
//         return porCasaSlytherin;
//     } else if(porCasaHufflepuff.length > porCasaGryffindor.length && porCasaHufflepuff.length > porCasaSlytherin.length && porCasaHufflepuff.length > porCasaRavenclaw.length){
//         return porCasaHufflepuff;
//     }
// }



//estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia y un array de estudiantes y devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6
const estudiantesPorMateriaAprobada = (materiaAChequear, estudiantes) => {
    const porMateria = materia => materia.nombre === materiaAChequear && materia.promedio > 6;

    const porMateriaAprobada = estudiante => {
        const resultado = estudiante.materias.filter(porMateria)

        return resultado.length !== 0
    } 

    return estudiantes.filter(porMateriaAprobada)
}



//obtenerInfoResumida, que tome por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un objeto por estudiante, donde cada objeto tiene las siguientes propiedades: nombre, casa, promedio, amigues (cantidad)
const obtenerInfoResumida = estudiantes => {
    const obtenerInfo = estudiante => {
        const infoEspecifica = {}
        infoEspecifica.nombre = `${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido}`
        infoEspecifica.casa = estudiante.casa
        infoEspecifica.promedio = obtenerPromedioDeEstudiante(estudiante)
        infoEspecifica.amigues = estudiante.amigues.length

        return infoEspecifica
    }
    
    return estudiantes.map(obtenerInfo)
}


//cantidadDeEstudiantesPorCasa, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa (no debe contar amigues)
const cantidadDeEstudiantesPorCasa = estudiantes => {
   

    const cantidadPorCasa = (cuentaParcial, estudiante) => {
        cuentaParcial[estudiante.casa] = cuentaParcial[estudiante.casa] + 1 || 1          // va recorriendo cada estudiante, accede a cuenta parcial y le suma uno
        //hacemos esto con reduce cuando no sabemos las propiedasdes q tenemos
        return cuentaParcial;
    }

    return estudiantes.reduce(cantidadPorCasa, {});
}



//cantidadDeEstudiantesPorMateriaAprobada, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia (promedio superior a 6)
const aNombreDeMateria = materia => materia.nombre;
const materiaAprobada = materia => materia.promedio > 6;

const aMateriasAprobadas = (resultadoParcial, materia) => {         //string del nombre
    resultadoParcial[materia] = resultadoParcial[materia] + 1 || 1;

    return resultadoParcial;
}

const aprobadesPorMateria = (totalGeneralParcial, estudiante) =>  
    estudiante.materias                     //obtenemos el array de materias
        .filter(materiaAprobada)           //filtramos las materias aprobadas
        .map(aNombreDeMateria)             //nos quedamos con un array con los nombres de las materias
        .reduce(aMateriasAprobadas, totalGeneralParcial)

const cantidadDeEstudiantesPorMateriaAprobada = estudiantes => estudiantes.reduce(aprobadesPorMateria, {})         
        //reduce el array de estudiantes a un objeto con materias y cantidad de aprobades -> RESULTADO FINAL