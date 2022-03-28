import Todo from './Todo.js';

export default function AddTodo(newListItem, toDo) {
  newListItem.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && newListItem.value) {
      const toDoItem = new Todo(newListItem.value, false, toDo.list.length);
      toDo.add(toDoItem);
      toDo.store();
    }
  });
}
