import axios from "axios";

export default {
 
  signupUser: function(userData) {
    return axios.post("/auth/signup", userData);
  },
  loginUser: function(userData) {
    return axios.post('/auth/login', userData);
  },
  logoutUser: function() {
    return axios.post('/auth/logout');
  },
  checkSession: function() {
    return axios.get('/auth/checksession');
  },
 updateUrl: function(id, urlData) {
    return axios.post("/url/addUrl", {id: id, urlData: urlData})
  },
  getQuestions: function() {
    return axios.get("/api/questions")
  },
  submitTodo: function(message, id, date) {
    return axios.post('/api/users/todos', {message: message, id: id, date: date})
  },
  submitReview: function(data) {
    return axios.post('/api/users/reviews', data)

  },
  getItems: function(item, id, date) {
    return axios.get(`/api/users/items/${item}/${id}/${date}`);
  },
  getReviews: function(item, id, date) {
    return axios.get(`/api/users/reviews/${item}/${id}/${date}`);
  },

  getTodosToCompare: function(id) {
    return axios.get(`/api/users/todo/${id}/timeleft`);
  }
  ,
  takeUrl: function(id) {
    return axios.get('/url/takeUrl/' + id);
  }
//todo 

  // getTodos: function(){
  //   return axios.get("api/todo");
  // },
  // getTodo: function(id){
  //   return axios.get("api/todo" + id);
  // },
  // deleteTodo: function(id) {
  //   return axios.delete("/api/todo" + id);
  // },
  // addTodo: function(titleData) {
  //   return axios.post("/api/todo/title" + titleData); 
  // }
};