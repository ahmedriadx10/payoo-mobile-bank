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
    <p>${userPayOptionValue} Bill ${userPaymentAmount} Tk pay sucessfull to ${billerNumber}</p>
  </div>
</div>
    `
getTransactionsParent.prepend(transactionDiv)
  }
});
