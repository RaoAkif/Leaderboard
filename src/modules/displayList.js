import enterKey from '../assets/images/return.svg';
import more from '../assets/images/more.svg';

const enter = new Image();
enter.src = enterKey;
const moreDots = new Image();
moreDots.src = more;

function display(index, toDo) {
  return `
    <input class='checkbox' type='checkbox' name='checkbox'>
    <label class="task" for='checkbox'>${toDo.list[index].description}</label>
    <img class='dots' src=${moreDots.src}>
  `;
}

export function createList(element, list) {
  element.innerHTML = '';
  list.sort();
  for (let i = 0; i < list.list.length; i += 1) {
    const newElement = document.createElement('li');
    newElement.className = 'list-item';
    newElement.innerHTML = display(i, list);
    element.appendChild(newElement);
  }
}

export default createList;