// get bonus

const getBonusButton = selectElement("bonus-btn");
getBonusButton.addEventListener("click", function () {
  const getUserCupon = getInputValue("user-coupon");
  const convUpperCase = getUserCupon.toUpperCase();
  if (convUpperCase !== "COUPONPAYOO") {
    alert("Invalid Coupon");
    return;
  } else {
    const currentBalance = getBalance();
    setBalance(currentBalance + 1000);
    alert(`Congratulation you received 1000 Tk from Payoo Mobile Bank 😍💝
    Cuopon Used : COUPONPAYOO 🔥
      `);
    const getCouponInputField = selectElement("user-coupon");
    getCouponInputField.setAttribute("disabled", true);
    getCouponInputField.value = "";
    getCouponInputField.setAttribute("placeholder", "Reached coupon bonus");
    getCouponInputField.classList.add("placeholder:italic");
  }
});
