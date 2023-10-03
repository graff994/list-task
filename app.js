const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add-task', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
