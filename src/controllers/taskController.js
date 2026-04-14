import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    console.log('QUERY:', req.query);

    let { completed } = req.query;

    if (completed !== undefined) {
      if (completed !== 'true' && completed !== 'false') {
        return res.status(400).json({
          error: 'Invalid value for completed. Use true or false.',
        });
      }

      completed = completed === 'true';
    }

    console.log('FILTER:', completed);

    const tasks = await taskService.getAllTasks({ completed });

    console.log('RESULT:', tasks);

    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
