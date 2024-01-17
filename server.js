const express = require('express');
const app = express();

const todos = [
  {
    id: 1,
    title: 'Learn React JS',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn Node JS',
    completed: false,
  },
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;
  newTodo.id = todos.length + 1;
  todos.push(newTodo);
  res.json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).send('Todo not found');
  }

  todo.completed = req.body.completed;
  res.json(todo);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
