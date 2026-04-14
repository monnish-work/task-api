import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(filters) {
  const { completed } = filters || {};
  return await taskRepository.getAllTasks({ completed });
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
