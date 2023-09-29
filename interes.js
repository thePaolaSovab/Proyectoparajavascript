const aplicarInteres = (monto) => {
    // funcion que retorna un numero un 1.25% aumentado
    return monto * 1.0125;
}

const calcularInteresAnual = (montoInicial) => {
    let monto = montoInicial;
    for (let i = 0; i < 12; i++) {
        //cambie el parametro adicion para cambiar la cantidad de dinero que se ingresa mensualmente
        monto = addDinero(monto, 250);
        monto = aplicarInteres(monto);
    }
    return monto;
}

const addDinero = (monto, adicion) => {
    //funcion intuitiva
    return monto + adicion;
}

//defina su monto inicial acá
console.log(calcularInteresAnual(250));