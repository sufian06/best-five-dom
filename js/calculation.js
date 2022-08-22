document.getElementById('btn-expenses').addEventListener('click', function(){
    const perPlayerAmount = getInputFieldValueById('player-input');
    const previousExpensesTotal = getTextElementValueById('expenses-total');
    const newExpensesTotal = previousExpensesTotal + perPlayerAmount;
    setTextElementValueById('expenses-total', newExpensesTotal);

    return newExpensesTotal;
});

document.getElementById('btn-total').addEventListener('click', function(){
    const manageraAmount = getInputFieldValueById('manager-input');
    const coachAmount = getInputFieldValueById('coach-input');
    const playerExpensesAmount = getTextElementValueById('expenses-total');
    const newAmountTotal = playerExpensesAmount + manageraAmount + coachAmount;

    setTextElementValueById('total', newAmountTotal);

    console.log(newAmountTotal)
});
