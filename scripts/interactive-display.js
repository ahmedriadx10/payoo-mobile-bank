//Show section with click event 

function displayMagic(id){

  const getAllSection=document.getElementsByClassName('display_hidden')
 for(const section of getAllSection){
  section.classList.add('hidden')
  section.classList.remove('bg-primary')
 }

 const getIdElement=selectElement(id)
 getIdElement.classList.remove('hidden')

}


