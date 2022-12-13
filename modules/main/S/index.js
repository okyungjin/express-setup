import { strMap } from 'fxjs';

export const tmpl = todos => `
  <main>
    <h1>TODO</h1>
    <form class="todo-form">
      <div class="input-field">
        <input
          type="text"
          id="input--add"
          placeholder="Enter todo"
          autocomplete="off"
        />
        <label for="input--add"></label>
      </div>
      <input type="submit" class="button--add" value="Add" />
    </form>
    <ul class="todo-list">
      ${strMap(todoTmpl, todos)}
    </ul>
  </main>
`;

const todoTmpl = todo => `
  <li class="todo-list__item ${todo.is_completed ? 'completed' : ''}" data-todo-id=${todo.todo_id}">
    <input type="checkbox" id="todo${todo.todo_id}" class="todo__completed" ${todo.is_completed ? 'checked' : '' }/>
    <label for="todo${todo.todo_id}" class="todo__title">${todo.title}</label>
    <input class="input--todo hidden" type="text" value="${todo.title}">
    <button class="button--todo button--edit">Edit</button>
    <button class="button--todo button--save hidden">Save</button>
    <button class="button--todo button--delete">Delete</button>
  </li>`;
