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
  }
});
