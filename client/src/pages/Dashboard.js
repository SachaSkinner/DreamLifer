import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import ReactUploadImage from "../components/UploadImage"
import CalendarView from '../components/CalendarView';
import Logout from '../components/Logout';

// =======
// import axios from "axios";
// import QuotesApi from "../components/QuotesApi";
// import ReactUploadImage from "../components/UploadImage";
// import CalendarView from "../components/CalendarView";
// >>>>>>> nov7
// import { RandomQuestions, QuestionItem } from "../components/RandomQuestions";
import Todo from '../components/ToDoSubmit';
import TodoStore from '../components/ToDoStore';
import API from "../utils/API";
import QuotesRequest from "../helpers/QuotesRequest";
import '../index.css';
import GoalTracker from "../components/GoalTracker";

class Dashboard extends Component {
    state = {
        questions: [],
        calendarDate: ''
    };

    handleDashState = (state, value) => {
        this.setState({ [state]: value })
      }

    loadQuestions = () => {
        API.getQuestions()
            .then(res => {
                this.setState({ questions: res.data });
                // console.log(this.state.questions);
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadQuestions();
    }

    render() {
        return (
            <Container fluid>
<Logout handleGlobalState={this.state.handleGlobalState} User={this.state.User} />
                <Row>
                <Col size='md-12'>
                    <ReactUploadImage User={this.props.User}></ReactUploadImage>
                    </Col>
                    <Col size="md-12">
                        {/* <Jumbotron> */}
                            <h1>{this.props.User.firstName.length >= 1 ? `Welcome back, ${this.props.User.firstName}!` :
                            'Welcome!'}</h1>
                            <h2>{this.state.calendarDate}</h2>
                           
                         {/* </Jumbotron> */}

                            <QuotesRequest />
{/* 
                            <RandomQuestions>
                                {this.state.questions.map(question => (
                                    <QuestionItem key={question._id} >
                                    <li>{question.question}</li></QuestionItem>
                                ))}

                                <button onClick={this.loadQuestions}>Random Questions</button>
                            </RandomQuestions> */}

                    
                    </Col>
                </Row>
                <Row>
                    <div className='conty'>
                    <Col size='4'>
                        <CalendarView handleDashState={this.handleDashState} />
                    </Col>
                    <Col size='4'>
                        <Todo User={this.props.User} calendarDate={this.state.calendarDate} />
                        <TodoStore User={this.props.User} calendarDate={this.state.calendarDate} />
                        <Logout handleGlobalState={this.props.handleGlobalState} User={this.props.User} />
                    </Col>
                    <Col size='4'>
                        <GoalTracker User={this.props.User} />
                    </Col>
                    </div>
                </Row>
                
                   
               
            </Container>

        );
    };
};

// =======
// import Todos from "../component/Todos";
// import AddTodo from "../component/AddTodo/AddTodo";
// import uuid from "uuid";

// class Dashboard extends Component {
//   state = {
//     quoteText: "",
//     quoteAuthor: "",
//     questions: [],
//     todos: [
//       // {
//       //   id: uuid.v4(),
//       //   title: 'Find a new wife',
//       //   complete:false
//       // }
//     ]
//   };

//   loadQuestions = () => {
//     API.getQuestions()
//       .then(res => {
//         this.setState({ questions: res.data });
//         console.log(this.state.questions);
//       })
//       .catch(err => console.log(err));
//   };

//   componentDidMount() {
//     // this.loadQuestions();
//     axios
//       .get("http://quotes.rest/qod.json", {})
//       .then(res => {
//         this.setState({
//           quoteText: res.data.contents.quotes[0].quote,
//           quoteAuthor: res.data.contents.quotes[0].author
//         });
//         console.log(res.data.contents.quotes[0].quote);
//         console.log(res.data.contents.quotes[0].author);
//       })
//       .catch(err => console.log(err));
//   }

//   //   componentDidMount() {
//   // 		API
//   // 			.getTodos()
//   //       .then((res) => this.setState({ todos: res.data }))
//   //       .catch(err => console.log(err));
//   // 	}

//   // Toggle Complete
//   markComplete = id => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       })
//     });
//   };

//   // Delete Todo
//   delTodo = id => {
//     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
//       this.setState({
//         todos: [...this.state.todos.filter(todo => todo.id !== id)]
//       })
//     );
//   };

//   // Add Todo
//   addTodo = title => {
//     axios
//       .post("https://jsonplaceholder.typicode.com/todos", {
//         title,
//         completed: false
//       })
//       .then(res => {
//         res.data.id = uuid.v4();
//         this.setState({ todos: [...this.state.todos, res.data] });
//       });
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <QuotesApi key={this.state.quoteText + this.state.quoteAuthor}>
//               <p>{this.state.quoteText}</p>
//               <p>{this.state.quoteAuthor}</p>
//             </QuotesApi>
//             <br></br>
//             <Jumbotron>
//               <h1>User's dashboard is here!!!</h1>
//             </Jumbotron>
//             <AddTodo addTodo={this.addTodo} />
//             <Todos
//               todos={this.state.todos}
//               markComplete={this.markComplete}
//               delTodo={this.delTodo}
//             /><br></br>
//             <CalendarView />
            
//             <RandomQuestions>
//               {this.state.questions.map(question => (
//                 <QuestionItem key={question._id}>
//                   <li>{question.question}</li>
//                 </QuestionItem>
//               ))}

//               <button onClick={this.loadQuestions}>Random Questions</button>
//             </RandomQuestions>

//             <ReactUploadImage User={this.props.User}></ReactUploadImage>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
// >>>>>>> nov7

export default Dashboard;
