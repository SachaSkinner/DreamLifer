import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
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
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};