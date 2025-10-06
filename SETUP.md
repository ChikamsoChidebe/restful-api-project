# Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

## Installation & Running

### 1. Backend Setup (JSON Server)
```bash
cd backend
npm install
npm start
```
The API server will run on http://localhost:3001

### 2. Frontend Setup (React App)
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
The React app will run on http://localhost:3000

## API Endpoints

The JSON Server automatically creates RESTful endpoints:

- `GET /tasks` - Fetch all tasks
- `GET /tasks/:id` - Fetch single task
- `POST /tasks` - Create new task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

## Testing the API

You can test the API directly using curl or Postman:

### GET all tasks
```bash
curl http://localhost:3001/tasks
```

### POST new task
```bash
curl -X POST http://localhost:3001/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Task",
    "description": "Testing API",
    "priority": "high",
    "completed": false
  }'
```

### PUT update task
```bash
curl -X PUT http://localhost:3001/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Task",
    "description": "Updated description",
    "priority": "medium",
    "completed": true
  }'
```

### DELETE task
```bash
curl -X DELETE http://localhost:3001/tasks/1
```

## Project Features

✅ **RESTful API Operations**: All CRUD operations implemented
✅ **Error Handling**: Network errors, validation, user feedback
✅ **Loading States**: Spinners and disabled states during API calls
✅ **Local Storage**: Backup data when API is unavailable
✅ **Form Validation**: Client-side validation with error messages
✅ **Responsive Design**: Works on desktop and mobile
✅ **Modern React**: Hooks, functional components, custom hooks