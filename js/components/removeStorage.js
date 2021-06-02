export default function removeFromStorage(event){
    console.log(event.target.dataset.id);
    const todoId = event.target.dataset.id;
    localStorage.removeItem("id");
    

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
  