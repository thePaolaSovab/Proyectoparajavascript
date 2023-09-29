const estudiantes = [
    {
        ci: 28288237,
        name: 'ruben gonzalez',
        mathGrade: 20,
        physicsGrade: 20,
        programmingGrade: 20
    },
    {
        ci: 1,
        name: 'paola sovab',
        mathGrade: 1,
        physicsGrade: 1,
        programmingGrade: 1
    },
    {
        ci: 2,
        name: 'edixon rivas',
        mathGrade: 1,
        physicsGrade: 1,
        programmingGrade: 1
    }
];


// obtener promedio de una materia
const promedio = (notasArray) => {
    const sumatoria = notasArray.reduce((acc, next) => acc + next, 0);
    return sumatoria / notasArray.length;
}

// calculado en base al sistema venezonalo; >= 9.5 aprobado
const numeroAprobados = (notasArray, materia) => {
    let aprobadosCounter = 0;
    notasArray.forEach((item) => item >= 9.5 ? aprobadosCounter++ : false);
    return `Hay ${aprobadosCounter} en ${materia}`;
}

const numeroAplazados = (notasArray, materia) => {
    let aplazadosCounter = 0;
    notasArray.forEach((item) => item <= 9.5 ? aplazadosCounter++ : false);
    return `Hay ${aplazadosCounter} en ${materia}`;
}

const numeroDeEstudiantesQueAprobaronTodo = (estudiantesArr) => {
    let estudiantesGod = 0;
    estudiantesArr.forEach((item) => (item.mathGrade >= 9.5 && item.physicsGrade >= 9.5 && item.programmingGrade >= 9.5) ? estudiantesGod++ : false);
    return estudiantesGod;
}

const cantidadEstudiantesQueAprobaronNMaterias = (estudiantesArr, cantidadDeMaterias) => {
    let counter = 0;
    estudiantesArr.forEach((item) => {
        let materiasAprobadas = 0; 
        if (item.mathGrade >= 9.5) materiasAprobadas++;
        if (item.physicsGrade >= 9.5) materiasAprobadas++;
        if (item.programmingGrade >= 9.5) materiasAprobadas++;
        if (materiasAprobadas <= cantidadDeMaterias) counter++;
    });
    return counter;
}

const notaMaximaPorMateria = (estudiantesArr) => {
    const notesMath = estudiantesArr.map((estudiante) => estudiante.mathGrade);
    const notesPhysics = estudiantesArr.map((estudiante) => estudiante.physicsGrade);
    const notesProgramming = estudiantesArr.map((estudiante) => estudiante.programmingGrade);

    const maxNotes = {
        math: notesMath.sort((a, b) => b - a)[0],
        physics: notesPhysics.sort((a, b) => b - a)[0],
        programming: notesProgramming.sort((a, b) => b - a)[0]
    };

    return maxNotes;
}

const main = (estudiantes) => {
    // notas por materia
    const notesMath = estudiantes.map((estudiante) => estudiante.mathGrade);
    const notesPhysics = estudiantes.map((estudiante) => estudiante.physicsGrade);
    const notesProgramming = estudiantes.map((estudiante) => estudiante.programmingGrade);

    // promedios de salon
    const promedioMath = promedio(notesMath);
    const promedioPhysics = promedio(notesPhysics);
    const promedioProgramming = promedio(notesProgramming);

    // numero de aprobados por materia
    const numeroDeAprobadosMath = numeroAprobados(notesMath, 'Matematicas');
    const numeroDeAprobadosPhysics = numeroAprobados(notesPhysics, 'Fisica');
    const numeroDeAprobadosProgramming = numeroAprobados(notesProgramming, 'Programacion');

    // numero de aplazados por materia
    const numeroDeAplazadosMath = numeroAplazados(notesMath, 'Matematicas');
    const numeroDeAplazadosPhysics = numeroAplazados(notesMath, 'Fisica');
    const numeroDeAplazadosProgramming = numeroAplazados(notesMath, 'Programacion');

    // numero de estudiantes que aprobaron todo
    const numeroEstudiantesAprobaronTodo = numeroDeEstudiantesQueAprobaronTodo(estudiantes);

    // numero de estudiantes que aprobaron una y dos materias
    const estudiantesAprobarUnaMateria = cantidadEstudiantesQueAprobaronNMaterias(estudiantes, 1);
    const estudiantesAprobarDosMateria = cantidadEstudiantesQueAprobaronNMaterias(estudiantes, 2);

    // notas maximas por materias 
    const notasMaximas = notaMaximaPorMateria(estudiantes);

    return {
        mathAvg: promedioMath,
        physicsAvg: promedioPhysics,
        programmingAvg: promedioProgramming,
        aprobadosMath: numeroDeAprobadosMath,
        aprobadosPhysics: numeroDeAprobadosPhysics,
        aprobadosProgramming: numeroDeAprobadosProgramming,
        aplazadosMath: numeroDeAplazadosMath,
        aplazadosPhysics: numeroDeAplazadosPhysics,
        aplazadosProgramming: numeroDeAplazadosProgramming,
        aprobaronTodo: numeroEstudiantesAprobaronTodo,
        unaMateria: estudiantesAprobarUnaMateria,
        dosMaterias: estudiantesAprobarDosMateria,
        notasMaxima: notasMaximas 
    };
}


console.log(main(estudiantes));