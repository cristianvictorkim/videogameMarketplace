const express = require("express");
const router = express.Router();

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  } = require("../controllers/todos.js");
  
  // Simple Requests methods
  router.get("/", getTodos);
  router.post("/", createTodo);
  
  // Complex Request methods (Trigger a CORS preflight)
  router.options("/:todoID");
  router.put("/:todoID", updateTodo);
  router.delete("/:todoID", deleteTodo);
  
  module.exports = router;