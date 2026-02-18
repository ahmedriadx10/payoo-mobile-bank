//Show section with click event

function displayMagic(id) {
  const getAllSection = document.getElementsByClassName("display_hidden");
  for (const section of getAllSection) {
    section.classList.add("hidden");
    section.classList.remove("bg-primary");
  }

  const getIdElement = selectElement(id);
  getIdElement.classList.remove("hidden");
}

const buttonParentGet = selectElement("home-buttons");

buttonParentGet.addEventListener("click", function (event) {
  const allButtons = buttonParentGet.children;

  for (const button of allButtons) {
    button.classList.remove("btn-primary", "btn-outline");
  }

  if (
    event.target.classList.contains("btn-color") ||
    event.target.classList.contains("img-btn")
  ) {
    event.target.parentNode.classList.add("btn-primary", "btn-outline");
  }
});
