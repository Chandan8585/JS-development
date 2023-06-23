// let todoInput = document.querySelector(".input");
// let addButton = document.querySelector(".button");
// let showTodos = document.querySelector(".todos-container");

// let localData = JSON.parse(localStorage.getItem("todo"));
// let todoList = localData || [];

// addButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   let todo = todoInput.value;
//   if (todo.length > 0) {
//     todoList.push({ id: Date.now(), todo, isCompleted: false });
//   }
//   renderTodoList(todoList);
//   todoInput.value = "";
// });

// showTodos.addEventListener("click", (e) => {
//   let key = e.target.dataset.key;
//   let delTodokey = e.target.dataset.todoid; // Corrected attribute name
//   todoList = todoList.filter((todo) => todo.id !== delTodokey);
//   localStorage.setItem("todo", JSON.stringify(todoList));
//   renderTodoList(todoList);
// });

// function renderTodoList(todoList) {
//   console.log(todoList);
//   showTodos.innerHTML = todoList.map(({ id, todo, isCompleted }) => `
//     <div class="todo relative">
//       <input class="t-checkbox" id="item-${id}" type="checkbox" data-key=${id}>
//       <label for="item-${id}" class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}" data-key=${id}>${todo}</label>
//       <button class="absolute right-0 button cursor">
//         <span data-todoid=${id} class="material-icons-outlined del-btn">delete</span>
//       </button>
//     </div>`
//   ).join("");
// }

// renderTodoList(todoList);


// const todo = {id: "123", todo:"sky diving", isCompleted:false};

// const {id, todo, isCompleted} = todo;


let arr = [2, 42, 12,4,2, 4,1, 23,32];

let output = (number){
  if(number > 5)
  return number;
})

console.log(output);