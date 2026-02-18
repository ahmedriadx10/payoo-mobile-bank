// pay bills

const payNowButton = selectElement("payNow-btn");
payNowButton.addEventListener("click", function () {
  const userPayOptionValue = getInputValue("select-payOption");
  const billerNumber = getInputValue("biller-accountNumber");
  const userPin = getInputValue("user-pin");
  const userPaymentAmount = getInputValueNumber("user-amountPay");

  if (userPayOptionValue === "Select Pay") {
    alert("Please Select a Bill Pay Option");
    return;
  }

  if (billerNumber.length !== 11) {
    alert("Invalid Number");
    return;
  }

  if (userPin !== "1234") {
    alert("Wrong Pin Number");
    return;
  }

  const getCurrentBalance = getBalance();
  const clacPayment = getCurrentBalance - userPaymentAmount;

  if (clacPayment < 0) {
    alert(
      `Invalid account balance you need more ${userPaymentAmount - getCurrentBalance} Tk to pay the bill please add money`,
    );
    return;
  } else {
    setBalance(clacPayment);
    alert(
      `${userPayOptionValue} Bill ${userPaymentAmount} Tk pay sucessfull to ${billerNumber}`,
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
    <p class='mt-3'>${userPayOptionValue} Bill ${userPaymentAmount} Tk pay sucessfull to ${billerNumber}</p>
 <div class='flex justify-end'>   <button class="remove_btn btn btn-primary btn-outline  btn-sm">
   Remove
      </button></div>
    </div>
</div>
    `;
    getTransactionsParent.prepend(transactionDiv);
  }
});
