

// step-1 : add eventListener to deposit button

document.getElementById("btn_depositNow").addEventListener('click', function(){

// step-2 : get the deposit amount from the deposit field

const depositField = document.getElementById("depositNow_field");
const newDepositAmountString = depositField.value ;  //for input field to use .value to get the input value
const newDepositAmount = parseFloat(newDepositAmountString);
//console.log(newDepositAmount);

// step-3 : get the current deposit value

const depositTotal = document.getElementById("Deposit_total");
const previousDepositTotalString = depositTotal.innerText;
const previousDeposit = parseFloat(previousDepositTotalString);
//console.log(previousDeposit);

// step-4 : add number set to total deposit

const currentDepositAmount = newDepositAmount + previousDeposit ;

// set the deposit total 
depositTotal.innerText = currentDepositAmount;

// step-5 : get balance total value 

const balanceTotal = document.getElementById("Amount_total");
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//console.log(previousBalanceTotal);

// step-6 : calculate current total balance

const currentTotalBalance = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = currentTotalBalance;

// step-7 : clear  the deposit field

depositField.value = "";

})

