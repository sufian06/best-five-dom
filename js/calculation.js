document.getElementById('btn-expenses').addEventListener('click', function(){
    const perPlayerAmount = getInputFieldValueById('player-input');
    const previousExpensesTotal = getTextElementValueById('expenses-total');
    const newExpensesTotal = previousExpensesTotal + perPlayerAmount;
    setTextElementValueById('expenses-total', newExpensesTotal);

    return newExpensesTotal;
});
