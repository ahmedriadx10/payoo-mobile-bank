// tranasfer money

const sendMoneyButton = selectElement("sendMoney-btn");
sendMoneyButton.addEventListener("click", function () {
  const getUserAccountNumber = getInputValue("user-accNumber");
  const userSendMoneyAmount = getInputValueNumber("user-transferAmount");
  const userPin = getInputValue("user-transPin");

  if (getUserAccountNumber.length !== 11) {
    alert("Wrong Number");
    return;
  }

  if (userPin !== "1234") {
    alert("Wrong pin number");
    return;
  }
  if (userSendMoneyAmount < 20) {
    alert("Send money amount would be at least 20");
    return;
  }
  const getCurrentBalance = getBalance();
  const clacBalance = getCurrentBalance - userSendMoneyAmount;

  if (clacBalance < 0) {
    alert(
      `Invalid ammount your account balance is ${getCurrentBalance} Tk you tried to send money ${userSendMoneyAmount - getCurrentBalance} Tk over than your current balance`,
    );
    return;
  } else {
    setBalance(clacBalance);
    alert(
      `Send money ${userSendMoneyAmount} sucessfull to ${getUserAccountNumber} at ${new Date().toDateString()}`,
    );

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
    <p>Send money ${userSendMoneyAmount} sucessfull to ${getUserAccountNumber} at ${new Date().toDateString()}</p>
  </div>
</div>
    `
getTransactionsParent.prepend(transactionDiv)
  }
});
