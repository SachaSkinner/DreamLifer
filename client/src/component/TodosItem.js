import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodosItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todoList.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    const { id, title } = this.props.todoList;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            type="button"
            style={deleteButton}
            className="btn btn-danger">
            X
          </button>
        </p>
      </div>
    );
  }
}

const deleteButton = {
  borderRadius: "50%",
  float: "right"
};

// PropTypes
TodosItem.propTypes = {
  todoList: PropTypes.object.isRequired
};
export default TodosItem;
