import axios from "axios";

export default {
  signupUser: function (userData) {
    return axios.post("/auth/signup", userData);
  },
  loginUser: function (userData) {
    return axios.post('/auth/login', userData);
  },
  logoutUser: function () {
    return axios.post('/auth/logout');
  },
  checkSession: function () {
    return axios.get('/auth/checksession');
  },
  updateUrl: function (id, urlData) {
    return axios.post("/url/addUrl", { id: id, urlData: urlData })
  },
  getQuestions: function () {
    return axios.get("/api/questions")
  },
  submitTodo: function (message, id, date) {
    return axios.post('/api/users/todos', { message: message, id: id, date: date })
  },
  submitReview: function (family, friends, work, study, fun, food, sleep, mood, sport, ideas, notes, thanks, id, date) {
    return axios.post('/api/users/reviews', { family: family, friends: friends, work: work, study: study, fun: fun, food: food, sleep: sleep, mood: mood, sport: sport, ideas: ideas, notes: notes, thanks: thanks, id: id, date: date })
  },
  getItems: function (item, id, date) {
    return axios.get(`/api/users/items/${item}/${id}/${date}`);
  },
  getDayInfo: function (id, date) {
    return axios.post(`/api/users/getDayInfo`, { id, date });
  },
  getTodosToCompare: function (id) {
    return axios.get(`/api/users/todo/${id}/timeleft`);
  },
  takeUrl: function (id) {
    return axios.get('/url/takeUrl/' + id);
  }

};