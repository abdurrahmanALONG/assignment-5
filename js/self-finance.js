 // ...............This is for the Function........................  

 function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
     if(inputAmountText > 0){
        return inputAmountText;
    }
    else if(inputAmountText < 0){
        const lessThenzero =document.getElementById('notify-belozero');
        lessThenzero.style.display = 'block';
     }
     else{
        const notANumber =document.getElementById('notify-notanumber');
        notANumber.style.display ='block';
     }
  
} 



  function incomeAmount(ammount) {
    const newIncomeAmountInput =document.getElementById(ammount);
    const newIncomeAmountText = newIncomeAmountInput.value;
    // const newIncomeAmount = parseFloat(newIncomeAmountText);
      if(newIncomeAmountText > 0){
       return  newIncomeAmountText; 
      }
      else if(newIncomeAmountText < 0){
        const lessthenzero =document.getElementById('notify-zeroIncom');
        lessthenzero.style.display = 'block'
      }
      else{
          const isnotanumber =document.getElementById('notify-incomeNotANumber');
          isnotanumber.style.display = 'block';
      }       
}




// ...............This is for the First button........................

    document.getElementById('calculat-button').addEventListener('click',function(){
    // this is for the income amount input
    const newIncomeAmount = incomeAmount('incomeCost-input');
  
 
    // this is for the food cost
    const newfoodCostAmount = getInputValue('foodCost-input');


    // this is for the rent cost
    const newRentCostAmount =getInputValue('rentCost-input');

  
    // this is for the clothes cost
    const newClothesCostAmount = getInputValue('clothesCost-input');


    // this is the Total Expenses
     const totalExpenses =document.getElementById('total-expenses');
    //  const updatedIncomValue =document.getElementById('incomeCost-input');
    //  const incomeInutText =parseFloat(updatedIncomValue);
     const newTotalCost = parseFloat(newfoodCostAmount) + parseFloat(newRentCostAmount) + parseFloat(newClothesCostAmount);
     if(newIncomeAmount> newTotalCost){
         totalExpenses.innerText = newTotalCost;
     }if( newIncomeAmount < newTotalCost){
        totalExpenses.innerText = '00';
        const excesExpanses =document.getElementById('notify-exsecexpances');
        excesExpanses.style.display ='block';
     }
     
    
    //  this is for the left blance
    const leftBalance = document.getElementById('balance-left');
    const newTotalBalance = newIncomeAmount - newTotalCost;
    if( newTotalBalance > 0){
        leftBalance.innerText =  newTotalBalance; 
    }else{
        leftBalance.innerText = '00'; 
    }
    

})



// ...............This is for the Secound button........................

document.getElementById('saving-button').addEventListener('click', function(){
    // this is for the income amount
    const newIncomeAmount = incomeAmount('incomeCost-input');

    // this is for the percentage input
    const newParcentage =  getInputValue('percentage-input');
    console.log(newParcentage);
    
    //  this is for the update left blance
    const leftUpdateBalances = document.getElementById('balance-left');
    const newUpdateBalance = leftUpdateBalances.innerText;
 
     // this is for the Savings Amount
     const savingAmount = document.getElementById('saving-amount');
    const leftBalancepercentageBy100 = newIncomeAmount / 100;
    const newSavingAmount =leftBalancepercentageBy100 * newParcentage;
    if( newSavingAmount > 0){
        savingAmount.innerText = newSavingAmount;
    }else{
        savingAmount.innerText = '00';
    }
  
   
    // this is for the Remaining Balance
    const remainingBalanceAmount = document.getElementById('remaining-blance');
    if( newUpdateBalance >=  newSavingAmount){
        const newRemainingBalanceAmount =  newUpdateBalance - newSavingAmount;
        if(newRemainingBalanceAmount > 0){
            remainingBalanceAmount.innerText = newRemainingBalanceAmount; 
        }else{
            remainingBalanceAmount.innerText = '00';
        }
       
    }else if(newUpdateBalance <  newSavingAmount){
       const notEnoughMoney = document.getElementById('notify-notenoughmoney');
       notEnoughMoney.style.display = 'block';
    }
   
   


})