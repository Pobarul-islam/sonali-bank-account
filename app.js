// calculate button handle
function calculateBtn() {
  // Balance section 
  let incomeValue = document.getElementById("income-value");

  let balanceDisplay = document.getElementById("balance-display");

  balanceDisplay.innerText = Number(balanceDisplay.innerText) + Number(incomeValue.value);
  incomeValue.value = "";

  // Total Expenses section

  let foodValue = document.getElementById("food").value;
  let rentValue = document.getElementById("rent").value;
  let clothsValue = document.getElementById("cloths").value;

  let totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothsValue);

  document.getElementById("total-expenses").innerText = totalExpenses;

  foodValue.value = '';

    balanceDisplay.innerText = balanceDisplay.innerText - totalExpenses;1 ``

}
