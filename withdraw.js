

// step-1 : add eventListener to withdraw button

document.getElementById("btn_WithdrawNow").addEventListener("click", function(){
    
// step-2 : get the withdraw amount from the Withdraw field

const withdrawField = document.getElementById("withdrawNow_field");
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
console.log(newWithdrawAmount);

// step-3 : get the current withdraw value

const withdrawTotal = document.getElementById("withdraw_total");
const previousWithdrawTotalString = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
console.log(previousWithdrawTotal);

// step-4 : add number set to total withdraw

const currentWithdrawAmount = newWithdrawAmount + previousWithdrawTotal ;

// set the withdraw total 
withdrawTotal.innerText = currentWithdrawAmount;

// step-5 : get balance total value 

const balanceTotal = document.getElementById("Amount_total");
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//console.log(previousBalanceTotal);

// step-6 : calculate current total balance

const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = currentTotalBalance;

// step-7 : clear  the withdraw field

withdrawField.value = "";


})