//transaction history delete btn

const getTransactionCardParent = selectElement("transactions-container");

getTransactionCardParent.addEventListener("click", function (event) {
  const targetButton = event.target;
  if (targetButton.classList.contains("remove_btn")) {
    getTransactionCardParent.removeChild(
      targetButton.parentNode.parentNode.parentNode.parentNode,
    );
  }
});
