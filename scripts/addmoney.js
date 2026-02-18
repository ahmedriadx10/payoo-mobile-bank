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
  }
});
