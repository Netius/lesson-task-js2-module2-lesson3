export default function removeFromStorage(event){

    let storeArray = JSON.parse(localStorage.getItem("todo"));

    console.log(storeArray)
    const todoId = event.target.dataset.id;

    for(let element in storeArray) {
      console.log(element.id)
    }

    // for(let i = 0; i <= storeArray.length; i++){
    //   console.log(storeArray.id)
    //   if(storeArray.id === todoId){
    //     storeArray.splice(i ,1);
    //     localStorage.setItem("todo", JSON.stringify(storeArray));  
    //   }
    // }
    
}


//Remove item from cart 
function removeProduct(product){
    let storeArray = JSON.parse(localStorage.getItem("id"));
  
    for(let i = 0; i <= storeArray.length; i++){
      if(storeArray[i] === product){
        storeArray.splice(i ,1);
        localStorage.setItem("id", JSON.stringify(storeArray));  
      }
    }
  
    if(storeArray.length === 0){
      localStorage.clear();
  
    }
    location.reload();
  }
  