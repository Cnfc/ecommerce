const express = require("express");
const router = express.Router();

const {
  read,
  createTasks,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

router.get("/tasks", read);
router.post("/tasks", createTasks);
router.post("/task/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
