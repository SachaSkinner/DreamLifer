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
  }
};