# RESTful API Mastery Project

A complete demonstration of RESTful API concepts with React frontend and JSON Server backend.

## 🌐 Live Demo

**Frontend**: https://restful-api-project-cyan.vercel.app/

*Note: The live demo uses LocalStorage for data persistence since the backend runs locally.*

## 🎯 Project Overview

This project demonstrates mastery of:
- RESTful API principles and HTTP methods (GET, POST, PUT, DELETE)
- React frontend with API integration
- Error handling and loading states
- Local storage integration
- Modern JavaScript/React patterns

## 🏗️ Project Structure

```
restful-api-project/
├── backend/
│   ├── db.json              # Mock database
│   ├── package.json         # Backend dependencies
│   └── server.js            # Custom server setup
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   ├── TaskForm.js
│   │   │   └── LoadingSpinner.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── hooks/
│   │   │   └── useTasks.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Backend Setup (JSON Server)
```bash
cd backend
npm install
npm start
```
Server runs on: http://localhost:3001

### Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```
App runs on: http://localhost:3000

## 📋 Features

### Core RESTful Operations
- **GET** `/tasks` - Fetch all tasks
- **POST** `/tasks` - Create new task
- **PUT** `/tasks/:id` - Update existing task
- **DELETE** `/tasks/:id` - Delete task

### Frontend Features
- ✅ Task management (CRUD operations)
- ✅ Loading states and error handling
- ✅ Local storage backup
- ✅ Responsive design
- ✅ Form validation

## 🛠️ Technologies Used

- **Backend**: JSON Server (Mock REST API)
- **Frontend**: React 18, Modern Hooks
- **HTTP Client**: Fetch API
- **Styling**: CSS3 with Flexbox/Grid
- **Storage**: LocalStorage for offline backup

## 📱 UI Description

The application features a clean, modern interface with:
- Header with app title and task counter
- Add task form with validation
- Task list with edit/delete actions
- Loading spinners during API calls
- Error messages for failed operations
- Responsive design for mobile/desktop

## 🎓 Learning Outcomes

This project demonstrates:
1. **RESTful API Design**: Proper HTTP methods and status codes
2. **React State Management**: useState, useEffect, custom hooks
3. **Error Handling**: Try-catch blocks, user feedback
4. **Performance**: Loading states, optimistic updates
5. **Data Persistence**: API + LocalStorage hybrid approach