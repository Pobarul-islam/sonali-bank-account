function calculateBtn() {
  let incomeValue = document.getElementById("income-value");
  let mainBalance = document.getElementById("main-balance");
  mainBalance.innerText = Number(mainBalance.innerText) + Number(incomeValue.value);

  let foodValue = document.getElementById("food-value");
  let rentValue = document.getElementById("rent-value");
  let clothsValue = document.getElementById("cloths-value");

  let totalExpenses = document.getElementById("total-expenses");

  //   totalExpenses.value = Number(totalExpenses.value) + Number(totalProduct.innerText);

    totalExpenses.innerText =
    Number(totalExpenses.innerText) + Number(foodValue.value) + Number(rentValue.value) + Number(clothsValue.value);

    foodValue.value = "";
    rentValue.value = "";
    clothsValue.value = "";
    incomeValue.value = "";
}

// function calculateBtn() {

// }
