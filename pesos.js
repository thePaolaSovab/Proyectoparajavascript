const numberIsInRange = (inicio, fin, numero) => {
    return numero >= (typeof inicio === 'undefined' ? 0 : inicio) && numero <= (typeof fin === 'undefined' ? 1000000 : fin);
}

const estadisticasPesos = (pesosArray) => {
    let counterLessThan40 = 0;
    let counter40To50 = 0;
    let counter50To60 = 0;
    let counterBiggerThan60 = 0;

    pesosArray.forEach((item) => {
        console.log(item);
        if (numberIsInRange(undefined, 39, item)) counterLessThan40++;
        if (numberIsInRange(40, 50, item)) counter40To50++;
        if (numberIsInRange(50, 60, item)) counter50To60++;
        if (numberIsInRange(61, undefined, item)) counterBiggerThan60++;
    });

    return [
        `Hay ${counterLessThan40} almunos que pesan menos de 40kg`,
        `Hay ${counter40To50} alumnos que están entre los 40 y 50 kg`,
        `Hay ${counter50To60} alumnos que están entre los 50 y 60 kg`,
        `Hay ${counterBiggerThan60} almunos que pesan más de 60kg`
    ]
}

console.log(estadisticasPesos([39, 40, 50, 60, 70]));