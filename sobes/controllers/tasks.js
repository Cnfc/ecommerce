const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

const tasks = [
  {
    id: 0,
    title: "Hello me",
  },
  {
    id: 1,
    title: "Buy me",
  },
  {
    id: 2,
    title: "Wow me",
  },
];

let ID = 3;

exports.read = async (req, res) => {
  console.log("Authenticating...");

  res.send({
    length: tasks.length,
    data: tasks,
  });
};

exports.createTasks = async (req, res) => {
  let newTasks = {
    id: ID++,
    title: req.body.title,
  };

  tasks.push(newTasks);

  // console.log(newTasks);
  res.send(newTasks);
};

exports.deleteTask = async (req, res) => {
  // console.log(tasks);
  const deletedProductId = req.body.id;

  for (let i of tasks) {
    if (i.id === deletedProductId) {
      var removedObject = tasks.splice(i.id, 1);
      console.log(removedObject);
    }
  }

  res.json({
    message: "Removed",
    deletedProductId,
    removedObject,
  });
};

exports.updateTask = (req, res) => {
  const updatedProductId = req.body.id;
  const newTitle = req.body.title;

  console.log(updatedProductId, newTitle);

  for (let i of tasks) {
    if (i.id === updatedProductId) {
      var changedTask = tasks.splice(i.id, 1);
    }
  }

  const newOne = {
    id: updatedProductId,
    title: newTitle,
  };

  tasks.push(newOne);

  res.json({
    message: "Updated",
    changedTask: {
      from: changedTask,
      to: newOne,
    },
  });
};
