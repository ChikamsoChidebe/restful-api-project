import React from 'react';
import { useTasks } from './hooks/useTasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  const {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    refreshTasks
  } = useTasks();

  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="App">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p className="subtitle">RESTful API Demo with React</p>
        <div className="stats">
          <span className="stat">Total: {tasks.length}</span>
          <span className="stat">Pending: {pendingCount}</span>
          <span className="stat">Completed: {completedCount}</span>
        </div>
      </header>

      <main className="app-main">
        {/* Error Display */}
        {error && (
          <div className="error-banner">
            <span>{error}</span>
            <button onClick={refreshTasks} className="retry-btn">
              Retry
            </button>
          </div>
        )}

        {/* Add Task Form */}
        <section className="form-section">
          <TaskForm onSubmit={addTask} loading={loading} />
        </section>

        {/* Loading State */}
        {loading && tasks.length === 0 && (
          <LoadingSpinner message="Loading tasks..." />
        )}

        {/* Task List */}
        <section className="list-section">
          <TaskList
            tasks={tasks}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
            onUpdate={updateTask}
            loading={loading}
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Demonstrating RESTful API operations: 
          <strong> GET</strong>, <strong>POST</strong>, <strong>PUT</strong>, <strong>DELETE</strong>
        </p>
        <p className="api-status">
          API: {error ? '🔴 Offline (using local backup)' : '🟢 Connected'}
        </p>
      </footer>
    </div>
  );
}

export default App;