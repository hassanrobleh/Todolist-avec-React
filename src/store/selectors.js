import { createSelector } from "reselect";
import { visibilityFilter } from "./actions";
export const filterSelector = (state) => state.filter;
export const todosSelector = (state) => state.todos;

export const todosListSelector = createSelector(
  [todosSelector],
  (todos) => todos.data
);

export const filteredTodoDataSelector = createSelector(
  [filterSelector, todosListSelector],
  (filter, todos) => {
    if (todos && filter) {
      switch (filter) {
        case visibilityFilter.SHOW_DONE: {
          return todos.filter((t) => t.done);
        }
        case visibilityFilter.SHOW_ACTIVE: {
          return todos.filter((t) => !t.done);
        }
        default: {
          return todos;
        }
      }
    }
  }
);
