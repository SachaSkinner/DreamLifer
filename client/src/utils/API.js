import axios from "axios";

export default {
 
  signupUser: function(userData) {
    return axios.post("/auth/cookies/signup", userData);
  },
  loginUser: function(userData) {
    return axios.post('/auth/cookies/login', userData);
  },
  logoutUser: function() {
    return axios.post('/auth/cookies/logout');
  },
  checkSession: function() {
    return axios.get('/auth/cookies/checksession');
  },
 
  updateUrl: function(id, urlData) {
    return axios.post("/url/addUrl/" + id + urlData);
  },
  getQuestions: function() {
    return axios.get("/api/questions")
  },

//todo 

  getTodos: function(){
    return axios.get("api/todo");
  },
  getTodo: function(id){
    return axios.get("api/todo" + id);
  },
  deleteTodo: function(id) {
    return axios.delete("/api/todo" + id);
  },
  addTodo: function(titleData) {
    return axios.post("/api/todo/title" + titleData); 
  }
};