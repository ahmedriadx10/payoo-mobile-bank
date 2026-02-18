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
    <p class='mt-3'>Send money ${userSendMoneyAmount} sucessfull to ${getUserAccountNumber} at ${new Date().toDateString()}</p>
 <div class='flex justify-end'>   <button class="remove_btn btn btn-primary btn-outline  btn-sm">
   Remove
      </button></div>
    </div>
</div>
    `;
    getTransactionsParent.prepend(transactionDiv);
  }
});
