# TaskMaster - Task Management System

**TaskMaster** is a full-stack web application designed to help users organize and manage their tasks efficiently. This application allows users to create, update, delete, and filter tasks by priority and deadlines. TaskMaster uses modern web technologies, including Node.js, Express.js, PostgreSQL, JWT for user authentication, and a responsive frontend built with HTML, CSS, and JavaScript.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Installation Guide](#installation-guide)
5. [Backend Setup](#backend-setup)
6. [Frontend Setup](#frontend-setup)
7. [Environment Variables](#environment-variables)
8. [Running the Application](#running-the-application)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [License](#license)
12. [Contributors](#contributors)

---

## Project Overview

TaskMaster is designed for individuals or teams to manage their tasks with ease. The application features user registration and authentication, task creation, updating, deletion, and filtering. Additionally, users can search for tasks by keywords and view tasks by priority or due date.

---

## Tech Stack

### Backend:
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for building APIs
- **PostgreSQL**: Relational database for storing user and task data
- **JWT (JSON Web Tokens)**: Secure authentication and authorization
- **bcrypt**: For hashing and verifying passwords
- **dotenv**: For environment variable management
- **morgan**: HTTP request logger middleware
- **cors**: Middleware for enabling cross-origin requests
- **helmet**: Security middleware to protect HTTP headers

### Frontend:
- **HTML5**: Markup language for the webpage structure
- **CSS3**: Stylesheet language for responsive design and styling
- **JavaScript (ES6)**: For interactive features and AJAX calls to the backend

---

## Features

- **User Registration & Authentication**: Secure registration and login using JWT with password hashing via bcrypt.
- **Task Management**: Create, read, update, and delete tasks with attributes such as title, description, priority (low, medium, high), and deadline.
- **Task Filtering**: Filter tasks by priority and due date.
- **Search Functionality**: Search tasks by keywords in the title or description.
- **Responsive UI**: Mobile-first, user-friendly interface for task management.

---

## Installation Guide

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 16 or higher
- **PostgreSQL**: A PostgreSQL server running locally or remotely
- **Git**: For version control

### Clone the Repository

Clone the repository to your local machine:

- git clone https://github.com/ONJoseph/taskmaster.git
- cd taskmaster

### Install Dependencies
Run the following command to install both backend and frontend dependencies:

- npm install
This will install all the required dependencies listed in the package.json file.

### Backend Setup
Environment Configuration
Create a .env file in the root directory of the project and set up the following environment variables:

# Server Configuration
- PORT=5000

# Database Configuration
- DB_HOST=localhost
- DB_USER=postgres
- DB_PASSWORD=your_password
- DB_NAME=taskmaster

# JWT Configuration
- JWT_SECRET=your_jwt_secret_key
- JWT_EXPIRES_IN=1h

# Other Configurations
- NODE_ENV=development
Replace your_password with your actual PostgreSQL password and your_jwt_secret_key with a strong secret key for JWT.

### Database Setup
Create the PostgreSQL database and tables:

- psql -U postgres
- CREATE DATABASE taskmaster;

Define the necessary database tables by running SQL commands or using migration tools.

### Frontend Setup
The frontend for TaskMaster is built using plain HTML, CSS, and JavaScript.

Open the frontend/index.html file in your browser to view the app.

The frontend makes asynchronous requests to the backend via AJAX to perform tasks such as creating, updating, and deleting tasks.

### Running the Application
Run the Backend
To run the backend server with live reloading, use nodemon:

- npm run dev
This will start the server on http://localhost:5000.

## Run the Frontend
Open the frontend/index.html in your browser to view the application. The frontend communicates with the backend via API requests.

## Environment Variables
Ensure the following variables are present in your .env file:

- **DB_HOST**: Database host, typically localhost for local development.
- **DB_USER**: PostgreSQL username.
- **DB_PASSWORD**: PostgreSQL password.
- **DB_NAME**: The name of the PostgreSQL database used by the app.
- **JWT_SECRET**: A secret key used for encoding and verifying JWT tokens.
- **JWT_EXPIRES_IN**: Token expiration time (e.g., 1h for 1 hour).
- **PORT**: The port number for the backend server.
- **NODE_ENV**: Set to development or production.
