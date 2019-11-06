//<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Resourses from "./pages/Resourses";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CalendarView from "./components/CalendarView";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";

//~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^
import React, { Component } from "react";
import logo from "./assets/images/logo.png";
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo/AddTodo";
import MyList from "./component/Pages/MyList";
import Header from "./component/Layout/Header";
import axios from "axios";
// import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Find a new wife',
      //   complete:false
      // }
    ]
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(res => this.setState({ todos: res.data }));
  }
  //toggle
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  //Add to do
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav />
          <div className="App">
            <div size="3" className="logo">
              <img src={logo} width="300" height="115" />
            </div>
            <div className="container">
              <Header className="app-moto" />
              <br></br>
              <Route
                exact
                path="/dashboard"
                render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </React.Fragment>
                )}
              />
              <Route exact path="/mylist" component={MyList} />
            </div>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/resourses" component={Resourses} />
              <Route exact path="/community" component={Community} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

        <div>
          <CalendarView />
          <Signup />
          <Login />
          <Logout />
        </div>
      </React.Fragment>
    );

    //=======
  }
  //>>>>>>> Stashed changes
}

export default App;
