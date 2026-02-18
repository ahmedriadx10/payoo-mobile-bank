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
    <p>Congratulation you received 1000 Tk from Payoo Mobile Bank 😍💝
    Cuopon Used : COUPONPAYOO 🔥</p>
  </div>
</div>
    `
getTransactionsParent.prepend(transactionDiv)
  }
});
