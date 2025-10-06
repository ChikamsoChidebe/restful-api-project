import { useState, useEffect } from 'react';
import apiService from '../services/api';

// Custom hook for task management with local storage backup
export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load tasks from API on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  // Sync with localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks-backup', JSON.stringify(tasks));
    }
  }, [tasks]);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await apiService.getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to load tasks. Using local backup if available.');
      // Fallback to localStorage
      const backup = localStorage.getItem('tasks-backup');
      if (backup) {
        setTasks(JSON.parse(backup));
      }
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    setLoading(true);
    setError(null);
    
    try {
      const newTask = await apiService.createTask(taskData);
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      setError('Failed to create task');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, taskData) => {
    setLoading(true);
    setError(null);
    
    try {
      const updatedTask = await apiService.updateTask(id, taskData);
      setTasks(prev => prev.map(task => 
        task.id === id ? updatedTask : task
      ));
    } catch (err) {
      setError('Failed to update task');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      await apiService.deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      await updateTask(id, { ...task, completed: !task.completed });
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    refreshTasks: loadTasks
  };
};