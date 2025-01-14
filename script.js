function calcularHipoteca() {
    // Obtener valores de entrada
    const precioVivienda = parseFloat(document.getElementById('precio-vivienda').value);
    const porcentajeFinanciacion = parseFloat(document.getElementById('porcentaje-financiacion').value);
    const plazoHipoteca = parseInt(document.getElementById('plazo-hipoteca').value);
    const interesAno = parseFloat(document.getElementById('interes-ano').value) / 100;
    const gastosHipoteca = parseFloat(document.getElementById('gastos-hipoteca').value) / 100;

    // Validar entradas
    if (isNaN(precioVivienda) || precioVivienda <= 0 || isNaN(porcentajeFinanciacion) || porcentajeFinanciacion <= 0 || porcentajeFinanciacion > 100 || isNaN(plazoHipoteca) || plazoHipoteca <= 0 || isNaN(interesAno) || interesAno < 0 || isNaN(gastosHipoteca) || gastosHipoteca < 0) {
        alert('Por favor, ingresa valores válidos en todos los campos.');
        return;
    }

    // Calcular la hipoteca financiada
    const montoFinanciado = precioVivienda * (porcentajeFinanciacion / 100);

    // Calcular los gastos adicionales
    const gastos = precioVivienda * gastosHipoteca;

    // Calcular el porcentaje no financiado por el banco
    const porcentajeNoFinanciado = 100 - porcentajeFinanciacion;
    const montoNoFinanciado = precioVivienda * (porcentajeNoFinanciado / 100);

    // Calcular los intereses y la cuota mensual
    const numPagos = plazoHipoteca * 12;
    const tasaInteresMensual = interesAno / 12;
    const cuotaMensual = montoFinanciado * (tasaInteresMensual * Math.pow(1 + tasaInteresMensual, numPagos)) / (Math.pow(1 + tasaInteresMensual, numPagos) - 1);
    const interesesTotales = cuotaMensual * numPagos - montoFinanciado;

    // Calcular el total (hipoteca + gastos + intereses)
    const totalHipoteca = montoFinanciado + gastos + interesesTotales;

    // Calcular el total de gastos (gastos de hipoteca + porcentaje no financiado por el banco)
    const totalGastosAdicionales = gastos + montoNoFinanciado;

    // Mostrar los resultados
    document.getElementById('resultado-hipoteca').innerText = `Monto de la hipoteca: €${montoFinanciado.toFixed(2)}`;
    document.getElementById('resultado-gastos').innerText = `Gastos de la hipoteca: €${gastos.toFixed(2)}`;
    document.getElementById('resultado-cuota').innerText = `Cuota mensual: €${cuotaMensual.toFixed(2)}`;
    document.getElementById('resultado-intereses').innerText = `Intereses totales a pagar: €${interesesTotales.toFixed(2)}`;
    document.getElementById('resultado-total').innerText = `Total de la hipoteca (incluyendo gastos e intereses): €${totalHipoteca.toFixed(2)}`;
    document.getElementById('resultado-gastos-total').innerText = `Estos son los ahorros que necesitas: €${totalGastosAdicionales.toFixed(2)}`;
}
