// array for todo list
const todolist2 = [
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


const todoList2 = document.getElementById('todo-list');

const todoItems = [
  { id: 'todo-1', label: 'Buy milk', checked: true },
  { id: 'todo-2', label: 'Buy eggs', checked: false },
  { id: 'todo-3', label: 'Buy bread', checked: false },
];

todoItems.forEach(item => {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = item.id;
  checkbox.checked = item.checked;

  const label = document.createElement('label');
  label.htmlFor = item.id;
  label.textContent = item.label;

  li.appendChild(checkbox);
  li.appendChild(label);

  todoList2.appendChild(li);
});
