const express = require("express");
const parser = require("body-parser");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
} = require("./src/controllers");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo_app");
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});

server.use(cors());
server.use(parser());

server.get("/todos", getAllTodos);
server.post("/create-new-todos", createTodo);
server.put("/update-todo", updateTodo);
server.delete("/delete-todo", deleteTodo);
server.patch("/toggle-todo", toggleTodo);

server.listen(4000, () => {
  console.log("server started on port 4000");
});
