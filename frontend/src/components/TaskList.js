import React, { useState } from 'react';

const TaskList = ({ tasks, onToggleComplete, onDelete, onUpdate, loading }) => {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditData({
      title: task.title,
      description: task.description,
      priority: task.priority
    });
  };

  const handleSave = async (id) => {
    try {
      const task = tasks.find(t => t.id === id);
      await onUpdate(id, { ...task, ...editData });
      setEditingId(null);
      setEditData({});
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const getPriorityClass = (priority) => {
    return `priority-${priority}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks yet</h3>
        <p>Add your first task using the form above!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h3>Tasks ({tasks.length})</h3>
      
      {tasks.map(task => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          {editingId === task.id ? (
            // Edit mode
            <div className="task-edit">
              <input
                type="text"
                value={editData.title}
                onChange={(e) => setEditData(prev => ({ ...prev, title: e.target.value }))}
                className="edit-title"
              />
              <textarea
                value={editData.description}
                onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
                className="edit-description"
                rows="2"
              />
              <select
                value={editData.priority}
                onChange={(e) => setEditData(prev => ({ ...prev, priority: e.target.value }))}
                className="edit-priority"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <div className="edit-actions">
                <button onClick={() => handleSave(task.id)} disabled={loading}>
                  Save
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            // View mode
            <div className="task-content">
              <div className="task-header">
                <h4 className={task.completed ? 'completed-text' : ''}>
                  {task.title}
                </h4>
                <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              
              <p className={`task-description ${task.completed ? 'completed-text' : ''}`}>
                {task.description}
              </p>
              
              <div className="task-meta">
                <span className="task-date">
                  Created: {formatDate(task.createdAt)}
                </span>
                <div className="task-actions">
                  <button
                    onClick={() => onToggleComplete(task.id)}
                    className={`toggle-btn ${task.completed ? 'complete' : 'incomplete'}`}
                    disabled={loading}
                  >
                    {task.completed ? '✓ Completed' : '○ Mark Complete'}
                  </button>
                  <button
                    onClick={() => handleEdit(task)}
                    className="edit-btn"
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="delete-btn"
                    disabled={loading}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;