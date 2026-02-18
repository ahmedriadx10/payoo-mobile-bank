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
  }
});
