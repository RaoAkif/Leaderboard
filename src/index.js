import './index.css';
import renew from './assets/images/renew.svg';
import enterKey from './assets/images/return.svg';
import TodoList from './modules/todoList.js';
import AddTodo from './modules/addTodo.js';
import { createList } from './modules/displayList.js';
import EditTodo from './modules/editTodo.js';
import DeleteTodo from './modules/DeleteTodo.js';

const heading = document.querySelector('#item-title');
const newItem = document.querySelector('.new-item');
const newListItem = document.querySelector('.new-list-item');
const toDoList = document.querySelector('.list');
const refresh = new Image();
refresh.src = renew;
const enter = new Image();
enter.src = enterKey;
const toDo = new TodoList();
toDo.checkStorage();
heading.appendChild(refresh);
newItem.appendChild(enter);

refresh.addEventListener('click', () => {
  window.location.reload();
});

createList(toDoList, toDo);

AddTodo(newListItem, toDo);

DeleteTodo(toDo);

EditTodo(toDo);
