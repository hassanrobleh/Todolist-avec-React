import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { visibilityFilter } from "../store/actions";

const TodoList = ({todos}) => {
  return (
    <ul className="list-group">
      {todos.state &&
        todos.todos.map((t) => <TodoItem keys={t.name} todos={t} />)}
    </ul>
  );
};

export default connect((state) => {
  const filter = state.filter;
  let todos;
  switch (filter) {
    case visibilityFilter.SHOW_DONE: {
      todos = state.todos.filter((t) => t.done);
      break;
    }
    case visibilityFilter.SHOW_ACTIVE: {
      todos = state.todos.filter((t) => !t.done);
      break;
    }
    default: {
      todos = state.todos;
      break;
    }
  }
  return {
    todos,
  };
})(TodoList);
