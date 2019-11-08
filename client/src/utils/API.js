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
    return axios.post("/url/addUrl/" + id + "/" + urlData);
  },
  getQuestions: function() {
    return axios.get("/api/questions")
  }
};