import React, { Component } from "react";
import TodoItem from "./TodosItem";
import PropTypes from "prop-types";

class Todos extends Component {


  render() {
    return this.props.todos.map(arrList => (
      <TodoItem
        key={arrList.id}
        todoList={arrList}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
