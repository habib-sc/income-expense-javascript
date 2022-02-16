document.getElementById('calculate-btn').addEventListener('click', function() {
    // Getting input value 
    const income = getInputValue('income-input');
    const foodExpense = getInputValue('food-expense-input');
    const rentExpense = getInputValue('rent-expense-input');
    const clothesExpense = getInputValue('clothes-expense-input');
    // Total expense calculation 
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    // displaying total expense
    setValue('total-expenses', totalExpenses);
    // Total Balance calculation 
    const totalBalance = income - totalExpenses;
    // displying total balance 
    setValue('total-balance', totalBalance);
})

function getInputValue(inputFieldId) {
    const input = document.getElementById(inputFieldId);
    const inputValue = parseInt(input.value);
    return inputValue;
}

function setValue(fieldId, result) {
    const value = document.getElementById(fieldId).innerText = result;
    return value;
}