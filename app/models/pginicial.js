const tarefasModel = require('./tarefasModel');

const express = require('express');
const app = express();

app.use(express.json());

app.post('/tarefas', async (req, res) => {
  try {
    const newTask = req.body;
    const result = await tarefasModel.create(newTask);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/tarefas', async (req, res) => {
  try {
    const tasks = await tarefasModel.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});