import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import {
  visibilityFilter,
  toggleTodo,
  deleteTodo,
  fetchTodo,
} from "../store/actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    props.fetchTodo();
  }

  render() {
    const { todos, deleteTodo, toggleTodo } = this.props;

    // console.log('test');
    return (
      <ul className="list-group">
        {todos &&
          todos.map((t, i) => (
            <TodoItem
              key={t.name}
              todo={t}
              deleteTodo={() => deleteTodo(i)}
              toggleTodo={() => toggleTodo(i)}
            />
          ))}
      </ul>
    );
  }
}

export default connect(
  (state) => {
    //console.log({ state });
    const filter = state.filter;
    let todos;
    switch (filter) {
      case visibilityFilter.SHOW_DONE: {
        todos = state.todos.data.filter((t) => t.done);
        break;
      }
      case visibilityFilter.SHOW_ACTIVE: {
        todos = state.todos.data.filter((t) => !t.done);
        break;
      }
      default: {
        todos = state.todos.data;
        break;
      }
    }
    return {
      todos,
    };
  },
  {
    toggleTodo,
    deleteTodo,
    fetchTodo,
  }
)(TodoList);
