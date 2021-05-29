import "./styles.scss";

// Eléments utiles
const newTodoInput = document.querySelector(".new-todo");
const todoListElt = document.querySelector(".todo-list");
const todoCountElt = document.querySelector(".todo-count");
renderNotCompletedCount();

newTodoInput.onkeyup = function (e) {
  if (e.key === "Enter") {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>${this.value}</label>
            <button class="destroy"></button>
          </div>
    `;
    todoListElt.append(newTodo);
    this.value = "";
    renderNotCompletedCount();
  }
};

function renderNotCompletedCount() {
  const notCompletedCount = document.querySelectorAll(
    ".todo-list li:not(.completed)"
  ).length;
  todoCountElt.innerText = notCompletedCount;
}
