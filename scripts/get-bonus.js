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
    <p class='mt-3'>Congratulation you received 1000 Tk from Payoo Mobile Bank 😍💝<br>
    Cuopon Used : COUPONPAYOO 🔥
      </p>
 <div class='flex justify-end'>   <button class="remove_btn btn btn-primary btn-outline  btn-sm">
   Remove
      </button></div>
    </div>
</div>
    `;
    getTransactionsParent.prepend(transactionDiv);
  }
});
