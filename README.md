# Task Manager Backend

## About

Task Manager Backend is a RESTful API built with Node.js and Express.js to provide the backend services for a task management application.

The API handles task-related operations including creating, retrieving, updating, and deleting tasks. It uses MongoDB for data persistence and provides endpoints that can be consumed by a frontend application.

## Stack Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript
* REST API

## Packages

* `express` — Web framework for building the REST API
* `mongoose` — MongoDB object modeling
* `cors` — Enables communication between the API and frontend applications
* `dotenv` — Manages environment variables
* `zod` — Request data validation

## Features

* Create tasks
* Retrieve all tasks
* Retrieve a single task
* Update tasks
* Delete tasks
* Mark tasks as completed
* MongoDB database integration
* Request validation
* Centralized error handling
* RESTful API architecture
* CORS configuration

## API Endpoints

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/v1/tasks`     | Retrieve all tasks       |
| POST   | `/api/v1/tasks`     | Create a new task        |
| GET    | `/api/v1/tasks/:id` | Retrieve a specific task |
| PATCH  | `/api/v1/tasks/:id` | Update a task            |
| DELETE | `/api/v1/tasks/:id` | Delete a task            |

## Installation

Clone the repository:

```bash
git clone https://github.com/Iamemmaose/taskmanger-backend.git
```

Navigate into the project:

```bash
cd taskmanger-backend
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace the MongoDB connection string with your own MongoDB URI.

## Running the Application

Start the development server:

```bash
npm run dev
```

The API will run locally on:

```text
http://localhost:5000
```

## Frontend Integration

This API was developed as the backend service for a separate Task Manager frontend built with Next.js and TypeScript.

The frontend communicates with this API through HTTP requests to perform task management operations.

## Project Purpose

This project was built to strengthen practical backend development skills, including REST API development, Express.js, MongoDB integration, CRUD operations, request validation, error handling, and frontend-backend communication.
