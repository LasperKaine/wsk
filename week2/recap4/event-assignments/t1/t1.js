// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const todoListElement = document.getElementById('todo-list');
const addModal = document.getElementById('add-todo-modal');
const addTodoForm = document.getElementById('add-todo-form');
const newTodoInput = document.getElementById('new-todo-input');
const openModalBtn = document.getElementById('open-modal-btn');
const cancelBtn = document.getElementById('cancel-btn');

function renderTodoList() {
  todoListElement.innerHTML = '';

  todoList.forEach((todo) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleCompletion(todo.id));

    const taskText = document.createElement('span');
    taskText.textContent = todo.task;
    if (todo.completed) {
      taskText.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTodoItem(todo.id));

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    todoListElement.appendChild(li);
  });
}

function toggleCompletion(id) {
  const todo = todoList.find((item) => item.id === id);
  todo.completed = !todo.completed;
  console.log(todoList);
  renderTodoList();
}

function deleteTodoItem(id) {
  const index = todoList.findIndex((item) => item.id === id);
  if (index > -1) {
    todoList.splice(index, 1);
    console.log(todoList);
    renderTodoList();
  }
}

function addTodoItem(task) {
  const newTodo = {
    id: todoList.length + 1,
    task: task,
    completed: false,
  };
  todoList.push(newTodo);
  console.log(todoList);
  renderTodoList();
}

openModalBtn.addEventListener('click', () => {
  addModal.showModal();
});

cancelBtn.addEventListener('click', () => {
  addModal.close();
});

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTask = newTodoInput.value.trim();
  if (newTask) {
    addTodoItem(newTask);
    addModal.close();
    newTodoInput.value = '';
  }
});

renderTodoList();
