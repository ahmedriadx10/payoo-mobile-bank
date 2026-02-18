const addMoneyButton = selectElement("add-money-btn");
addMoneyButton.addEventListener("click", function () {
  const bankAccountNumber = getInputValue("user-bank-accNumber");
  const userAddMoneyAmount = getInputValueNumber("user-amount");
  const selectElementValue = getInputValue("select-value");
  const userPin = getInputValue("user-pinNumber");
  if (selectElementValue === "Select bank") {
    alert("Please Select A Bank");
    return;
  }

  if (bankAccountNumber !== "01792579202") {
    alert("Wrong Bank Account Number");
    return;
  }

  if (userPin !== "1234") {
    alert("Wrong pin Number");
    return;
  } else {
    const getUserBalance = getBalance();

    const totalMoney = getUserBalance + userAddMoneyAmount;
    alert(
      `Add money ${userAddMoneyAmount} successfull from ${selectElementValue} at ${new Date().toDateString()}`,
    );
    setBalance(totalMoney);
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
    <p>Add money ${userAddMoneyAmount} successfull from ${selectElementValue} at ${new Date().toDateString()}</p>
  </div>
</div>
    `
getTransactionsParent.prepend(transactionDiv)
  }
});
