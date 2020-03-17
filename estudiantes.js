// // Hacer ejercicios de estudiantes acá

// estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido


const estudiantesPorHechizo = (estudiantes, hechizo) => {
    const porHechizo = estudiante => estudiante.hechizoPreferido === hechizo;
   
    const estudiantesFiltrados = estudiantes.filter(porHechizo);

    return estudiantesFiltrados;
}


// estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro.

const estudiantesConMasAmiguesQue = (estudiantes, x) => {
    const sumarAmigues = estudiante => {
    
        const amiguesCantidad = estudiante.amigues;

        const cantidadDeAmigues = amiguesCantidad.length;
        return cantidadDeAmigues;   
    }
    
    const masDeXAmigues = (cantidadDeAmigues, x) => {

        return cantidadDeAmigues > x;

    }
   const amiguesFiltrados = estudiantes.filter(masDeXAmigues, x)

    return amiguesFiltrados

}


console.log(estudiantesConMasAmiguesQue(estudiantes, 3));

