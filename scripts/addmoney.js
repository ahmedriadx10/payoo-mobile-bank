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
    const getTransactionsParent = selectElement("transactions-container");
    const transactionDiv = document.createElement("div");

    transactionDiv.innerHTML = `
    <div class="card bg-base-100 w-[90%] mx-auto shadow-sm">
  <div class="card-body">
    <div class="card-actions">
    <div class="badge badge-success">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline></g></svg>
  Completed
</div>
  
    </div>
    <p class='mt-3'>Add money ${userAddMoneyAmount} successfull from ${selectElementValue} at ${new Date().toDateString()}</p>
 <div class='flex justify-end'>   <button class="remove_btn btn btn-primary btn-outline  btn-sm">
   Remove
      </button></div>
    </div>
</div>
    `;
    getTransactionsParent.prepend(transactionDiv);
  }
});
