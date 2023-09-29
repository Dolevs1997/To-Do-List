const todoListArray = JSON.parse(localStorage.getItem('todoList')) ||
  [
    {
      name: 'Watch Movie',
      date: '20.10.2023'
    },
    {
      name: 'Wash dishes',
      date: '23.12.2024'
    }
  ];

const addElement = document.querySelector('.js-add-button');
addElement.addEventListener('click', () => addTodo());
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const inputDateElement = document.querySelector('.js-date-input');
  const name = inputElement.value;
  const date = inputDateElement.value;
  todoListArray.push({
    name,
    date
  });
  console.log(todoListArray);
  inputElement.value = ' ';
  inputDateElement.value = ' ';
  renderAddTodo();
}
function renderAddTodo() {
  let todoList = '';
  todoListArray.forEach((todoObject) => {
    const name = todoObject.name;
    const date = todoObject.date;
    const html = `
      <div>${name}</div>
      <div> ${date}</div>
      <button class="delete-button js-delete-button">Delete</button>`;
    todoList += html;
    localStorage.setItem('todoList', JSON.stringify(todoListArray));

  });
  document.querySelector('.doList-js').innerHTML = todoList;
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoListArray.splice(index, 1);
        renderAddTodo();
      });

    });
}