//our helpers are here 😍🔥

function getInputValueNumber(id) {
  const catchTheInput = document.getElementById(id);
  return Number(catchTheInput.value);
}


function selectElement(getId){
  const findElement=document.getElementById(getId)
  return findElement
}

function getInputValue(id){

  const catchTheElement=document.getElementById(id)
  return catchTheElement.value
}

function getBalance(){
const balance=document.getElementById('user-balance')
return Number(balance.innerText)

}


function setBalance(takeBalance){

  const balance=document.getElementById('user-balance')
  balance.innerText=takeBalance

}