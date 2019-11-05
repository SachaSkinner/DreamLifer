import React, { Component } from "react";
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state ={
        title: ''
    }

    onChange = (event) => this.setState({ [event.target.name]:
         event.target.value });

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }


  render() {
    return (
    <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
        <input 
        type="text"
        name="title"
        placeholder="Add Todo..."
        style={{flex: '10', padding: '5px'}}
        value={this.state.title}
        onChange={this.onChange}
        />
        <input 
        type="submit"
        value="submit"
        className="btn btn-primary"
        style={{flex: '1'}}
        />
    </form>
    )
  }
}

AddTodo.propTyprs = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
