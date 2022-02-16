// Calculate Event 
document.getElementById('calculate-btn').addEventListener('click', function() {
    // Getting input value 
    const income = getIncome();
    const foodExpense = getInputValue('food-expense-input');
    const rentExpense = getInputValue('rent-expense-input');
    const clothesExpense = getInputValue('clothes-expense-input');
    // Total expense calculation 
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    // Total Balance calculation 
    const totalBalance = income - totalExpenses;

    // Validatating expense 
    if (totalExpenses > income) {
        pushError('Your expenses is highter than your income.')
    } else {
        // displaying total expense
        setValue('total-expenses', totalExpenses);
        // displying total balance 
        setValue('total-balance', totalBalance);
    }

})

// Saving event 
document.getElementById('saving-btn').addEventListener('click', function() {
    // Percentage calculation 
    const percentageInput = getInputValue('saving-input');
    const savingAmount = (getIncome() * percentageInput) / 100;
    // displaying saving amount 
    setValue('saving-amount', savingAmount);
    // Remaining balance calculation 
    const currentBalance = document.getElementById('total-balance').innerText;
    const remainingBalance = parseInt(currentBalance) - savingAmount;
    console.log(remainingBalance);
    // Displying remaining amount 
    setValue('remainning-amount', remainingBalance);
})

function getIncome() {
    const income = getInputValue('income-input');
    return income;
}

function getInputValue(inputFieldId) {
    const input = document.getElementById(inputFieldId);
    const inputValue = parseInt(input.value);
    const inputLabel = input.previousElementSibling.innerText;
    // validation start
    if (isNaN(inputValue)) {
        pushError('Invalid input in ' + '"' + inputLabel + '"' + 'field.');
        return;
    } else if (inputValue < 0) {
        pushError('Invalid input in ' + '"' + inputLabel + '"' + 'field. Please enter positve number.');
        return;
    }

    return inputValue;
}

function setValue(fieldId, result) {
    const value = document.getElementById(fieldId).innerText = result;
    return value;
}

function pushError(errorMessage) {
    document.getElementById('error-field').innerText = errorMessage;
}