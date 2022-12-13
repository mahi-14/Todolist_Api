const { Todo } = require("./models");

const createTodo = async (request, response) => {
  await Todo.create(request.body);
  return response.json({ status: "Todo created" });
};

const getAllTodos = async (request, response) => {
  var _id = request.query.id;
  if (_id) {
    var allTodos = await Todo.findById(_id);
  } else {
    var allTodos = await Todo.find();
  }
  return response.json(allTodos);
};

const updateTodo = async (request, response) => {
  var _id = request.query.id;
  var data = request.body;
  await Todo.findByIdAndUpdate(_id, data);
  return response.json({ status: "Todo updated" });
};

const deleteTodo = async (request, response) => {
  var _id = request.query.id;
  await Todo.findByIdAndDelete(_id);
  return response.json({ status: "Todo deleted" });
};

const toggleTodo = async (request, response) => {
  var _id = request.query.id;
  var data = request.query.iscomplete;
  var records = request.body;
  if (_id) {
    var allTodos = await Todo.findByIdAndUpdate(_id, records);
  } else if (data) {
    var allTodos = await Todo.find({ iscomplete: data });
  } else {
    var allTodos = await Todo.find();
  }
  return response.json(allTodos);
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
