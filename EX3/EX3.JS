const todoList = document.getElementById('todo-list');
function addTodoItem(name, content) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  if (name != '' && content != "") {
    span.innerText = `${name}: ${content}`;
    li.appendChild(span);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const contentInput = document.getElementById('content');
  addTodoItem(nameInput.value, contentInput.value);
  nameInput.value = '';
  contentInput.value = '';
});