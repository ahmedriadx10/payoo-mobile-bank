//our login codes

const logInButton = selectElement("login-btn");

logInButton.addEventListener("click", function () {
  const userNumberInput = getInputValue("user-login-number");
  const userPinInput = getInputValue("user-pin");

  if (userNumberInput.length !== 11 || userNumberInput !== "01792579202") {
    alert(`Wrong Number Detected ${userNumberInput}`);
    return;
  }

  if (userPinInput !== "1234") {
    alert(`Invalid Pin ${userPinInput} is not a valid pin`);
    return;
  } else {
    window.location.assign("./home.html");
  }
});
