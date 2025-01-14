function calcularHipoteca() {
    // Obtener valores de entrada
    const precioVivienda = parseFloat(document.getElementById('precio-vivienda').value);
    const porcentajeFinanciacion = parseFloat(document.getElementById('porcentaje-financiacion').value);
    const plazoHipoteca = parseInt(document.getElementById('plazo-hipoteca').value);
    const interesAno = parseFloat(document.getElementById('interes-ano').value) / 100;
    const gastosHipoteca = parseFloat(document.getElementById('gastos-hipoteca').value) / 100;

    // Calcular la hipoteca financiada
    const montoFinanciado = precioVivienda * (porcentajeFinanciacion / 100);

    // Calcular los gastos adicionales
    const gastos = precioVivienda * gastosHipoteca;

    // Calcular los intereses y la cuota mensual
    const numPagos = plazoHipoteca * 12;
    const tasaInteresMensual = interesAno / 12;
    const cuotaMensual = montoFinanciado * (tasaInteresMensual * Math.pow(1 + tasaInteresMensual, numPagos)) / (Math.pow(1 + tasaInteresMensual, numPagos) - 1);
    const interesesTotales = cuotaMensual * numPagos - montoFinanciado;

    // Mostrar los resultados
    document.getElementById('resultado-hipoteca').innerText = `Monto de la hipoteca: €${montoFinanciado.toFixed(2)}`;
    document.getElementById('resultado-gastos').innerText = `Gastos de la hipoteca: €${gastos.toFixed(2)}`;
    document.getElementById('resultado-cuota').innerText = `Cuota mensual: €${cuotaMensual.toFixed(2)}`;
    document.getElementById('resultado-intereses').innerText = `Intereses totales a pagar: €${interesesTotales.toFixed(2)}`;
}
