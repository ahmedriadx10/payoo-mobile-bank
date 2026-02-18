//Cash out

const withdrawButton = selectElement("withdraw-btn");

withdrawButton.addEventListener("click", function () {
  const userAgentNumber = getInputValue("user-agent-number");
  const userWithdrawAmount = getInputValueNumber("user-cashout-amount");
  const userWithdrawInputField = selectElement("user-cashout-amount");
  const userPin = getInputValue("user-accountPin");

  if (userAgentNumber !== "01792579202") {
    alert("Wrong Agen Number");
    return;
  }

  if (userPin !== "1234") {
    alert("Invalid Pin");
    return;
  }

  const currentBalance = getBalance();
  const calcWithdraw = currentBalance - userWithdrawAmount;

  if (calcWithdraw < 0) {
    userWithdrawInputField.classList.add("text-error", "border-error");
    alert(
      `You haven't sufficient balance Your Balance is ${currentBalance} Tk you tried to withdraw over ${userWithdrawAmount - currentBalance} Tk than your current balance`,
    );

    return;
  } else {
    alert(
      `Cashout ${userWithdrawAmount} sucessfull to ${userAgentNumber} ${new Date().toDateString()}`,
    );
    setBalance(calcWithdraw);
    userWithdrawInputField.classList.remove("text-error", "border-error");
     userWithdrawInputField.value=''
         const getTransactionsParent=selectElement('transactions-container')
    const transactionDiv=document.createElement('div')

    transactionDiv.innerHTML=`
 <div class="card bg-base-100 w-[90%] mx-auto shadow-sm">
  <div class="card-body">
    <div class="card-actions">
    <div class="badge badge-success">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline></g></svg>
  Completed
</div>
  
    </div>
    <p class='mt-3'>Cashout ${userWithdrawAmount} sucessfull to ${userAgentNumber} ${new Date().toDateString()}</p>
 <div class='flex justify-end'>   <button class="remove_btn btn btn-primary btn-outline  btn-sm">
   Remove
      </button></div>
    </div>
</div>
    `
getTransactionsParent.prepend(transactionDiv)
  }
});
