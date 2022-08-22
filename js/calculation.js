document.getElementById("btn-expenses").addEventListener("click", function () {

  const perPlayerAmount = getInputFieldValueById("player-input");
  // const previousExpensesTotal = getTextElementValueById('expenses-total');
  console.log(perPlayerAmount)

  if (isNaN(perPlayerAmount) || perPlayerAmount == '') {
    alert("Please enter a number");
    return false;
  }
  

  const totalPlayer = document.getElementById("player-list");

  const totalPlayerLength = totalPlayer.childNodes.length;

  const newExpensesTotal = totalPlayerLength * perPlayerAmount;



  setTextElementValueById("expenses-total", newExpensesTotal);

  return newExpensesTotal;
});

document.getElementById("btn-total").addEventListener("click", function () {
  const manageraAmount = getInputFieldValueById("manager-input");
  const coachAmount = getInputFieldValueById("coach-input");
  const playerExpensesAmount = getTextElementValueById("expenses-total");

  if(isNaN(manageraAmount || coachAmount || playerExpensesAmount)) {
    alert('Please input number only');
    return false;
  } else if((manageraAmount || coachAmount || playerExpensesAmount) == '') {
    alert('Please input number');
    return false;
  }

  const newAmountTotal = playerExpensesAmount + manageraAmount + coachAmount;

  setTextElementValueById("total", newAmountTotal);
});
