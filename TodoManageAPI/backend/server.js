
const express = require('express');
//const connectDB = require('./config/database');
const taskRouter = require('./routes/tasks');

const app = express();
const port = 3000;

//connectDB();

app.use(express.json());  // To parse JSON request bodies
app.use('/tasks', taskRouter);

// Add a route for the root path ("/")
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome!</h1>
    <p>The server is running. Access task-related functionalities through the <a href="/tasks">/tasks</a> endpoint.</p>
    `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Open your browser and navigate to: http://localhost:${port}`); // Added line
});