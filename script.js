function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalInterest = (monthlyPayment * loanTerm) - loanAmount;

    document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2) + ' €';
    document.getElementById('totalInterest').textContent = totalInterest.toFixed(2) + ' €';
    document.getElementById('results').style.display = 'block';
}
