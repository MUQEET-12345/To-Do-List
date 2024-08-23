const todolists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");

const addTodoListStorage =(todo)=>{
    return localStorage.setItem("Todo-List", JSON.stringify(todo));
}

const addTodoList =(e)=>{
    e.preventDefault();
    // addTodoListStorage(listValue.value);
    
    console.log(addTodoListStorage(listValue.value), "ma nhi chal rhaha") 
    // console.log("hello")
  const liElement =document.createElement("li");
  liElement.innerHTML = listValue.value ;
    // console.log(liElement.innerHTML)
    todolists.append(liElement);
} 



document.querySelector('.btn').addEventListener("click",(e)=>{
    addTodoList(e);
});
