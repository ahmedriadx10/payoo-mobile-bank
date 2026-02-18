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
    return;
  }
});
