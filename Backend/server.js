require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const Project = require('./models/Project');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const RENDER_BACKEND_URL = process.env.RENDER_BACKEND_URL;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/sprints', require('./routes/sprintRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});


// Schedule task to move overdue tasks to backlog
cron.schedule('0 0 * * *', async () => { // Runs every day at midnight
  ('Running daily task check for overdue tasks...');
  try {
    const overdueProjects = await Project.find({ 'tasks.dueDate': { $lt: new Date() }, 'tasks.status': { $ne: 'Backlog' } });

    for (const project of overdueProjects) {
      for (const task of project.tasks) {
        if (task.dueDate && task.dueDate < new Date() && task.status !== 'Backlog') {
          task.status = 'Backlog';
        }
      }
      await project.save();
    }
  } catch (error) {
    console.error('Error checking for overdue tasks:', error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});