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
    <div class="card-actions justify-end">
      <button class="btn btn-primary btn-outline btn-square btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p>Cashout ${userWithdrawAmount} sucessfull to ${userAgentNumber} ${new Date().toDateString()}</p>
  </div>
</div>
    `
getTransactionsParent.prepend(transactionDiv)
  }
});
