const router = require("express").Router();
const todoControllers = require("../../controllers/todo/todocontrollers");

// Matches with "/api/todos"
router.route("/")
  .get(todoControllers.findAll)
  .post(todoControllers.create);

// Matches with "/api/todo/:id"
router
  .route("/:id")
  .get(todoControllers.findById)
  .put(todoControllers.update)
  .delete(todoControllers.remove);

module.exports = router;
