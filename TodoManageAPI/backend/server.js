require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRouter);

app.get('/', (req, res) => {
    res.status(200).send(`
    <h1>Welcome!</h1>
    <p>The server is running. Access task-related functionalities through the <a href="/tasks">/tasks</a> endpoint.</p>
    `);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!'); // Or a more detailed message
  });

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Open your browser and navigate to: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Terminate application if DB connection fails
  }
}
//this line will start server
startServer();
