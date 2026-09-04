# 📚 Book Store

A full-stack **Book Store Web Application** built using **React, TypeScript, Spring Boot, MySQL, and MongoDB**.

The application provides a user-friendly platform for browsing and managing books, along with user registration and login functionality.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Database Configuration](#-database-configuration)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [API Examples](#-api-examples)
- [Security](#-security)
- [Testing](#-testing)
- [Production Build](#-production-build)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 📖 About the Project

**Book Store** is a full-stack web application developed using a modern frontend and backend architecture.

The frontend is built with **React and TypeScript**, while the backend is developed using **Spring Boot**.

The application uses two databases:

- **MySQL** for user-related information
- **MongoDB** for book-related information

The frontend communicates with the backend through RESTful APIs.

---

## ✨ Features

### 👤 User Management

- User registration
- User login
- Password encryption using BCrypt
- User input validation
- User information management

### 📚 Book Management

- View all books
- View individual book details
- Search books by title
- Filter books by category
- Add new books
- Update existing books
- Delete books
- Manage book prices
- Manage book stock
- Book descriptions
- Book image URLs

### 💻 Application Features

- Responsive user interface
- RESTful API architecture
- React and TypeScript frontend
- Spring Boot backend
- MySQL database integration
- MongoDB database integration
- Spring Security
- BCrypt password encryption
- Maven project management

---

## 🛠️ Technology Stack

### Frontend

| Technology | Description |
|------------|-------------|
| React | Frontend library |
| TypeScript | Programming language |
| Tailwind CSS | UI styling |
| Axios | HTTP client for API requests |
| React DOM | React rendering |
| npm | Package management |

### Backend

| Technology | Description |
|------------|-------------|
| Java 21 | Programming language |
| Spring Boot | Backend framework |
| Spring Web | REST API development |
| Spring Data JPA | MySQL database integration |
| Spring Data MongoDB | MongoDB integration |
| Spring Security | Application security |
| Bean Validation | Request validation |
| BCrypt | Password hashing |
| Lombok | Reduces boilerplate code |
| Maven | Dependency management |

### Databases

| Database | Purpose |
|----------|---------|
| MySQL | User information |
| MongoDB | Book information |

---

## 🏗️ Project Architecture

```text
                         ┌─────────────────┐
                         │      USER       │
                         └────────┬────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │     React Frontend      │
                    │                         │
                    │ React + TypeScript      │
                    │ Tailwind CSS            │
                    │ Axios                   │
                    └────────────┬────────────┘
                                 │
                              REST API
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    Spring Boot Backend  │
                    │                         │
                    │ Spring Web              │
                    │ Spring Security         │
                    │ REST Controllers        │
                    │ Services                │
                    │ Repositories            │
                    └────────────┬────────────┘
                                 │
                   ┌─────────────┴─────────────┐
                   │                           │
                   ▼                           ▼
          ┌─────────────────┐         ┌─────────────────┐
          │      MySQL      │         │     MongoDB     │
          │                 │         │                 │
          │   User Data     │         │    Book Data    │
          └─────────────────┘         └─────────────────┘

📂 Project Structure
book_store/
│
├── backend/
│   │
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── ...
│   │       │
│   │       └── resources/
│   │           └── application.properties
│   │
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   └── README.md
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   └── ...
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── .gitignore
└── README.md

⚙️ Prerequisites

Before running the project, make sure the following software is installed.

Java 21 or higher
Node.js
npm
Maven
MySQL
MongoDB
Git

You can verify the installations using:

java -version
node -v
npm -v
mvn -version
git --version

📥 Installation
1. Clone the Repository
git clone https://github.com/vrd2003/book_store.git


Navigate to the project directory:

cd book_store

🗄️ Database Configuration
MySQL Configuration

Start your MySQL server.

Create the database:

CREATE DATABASE bookstore;


Open:

backend/src/main/resources/application.properties


Configure the MySQL connection:

spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD


Replace:

YOUR_PASSWORD


with your actual MySQL password.

MongoDB Configuration

Make sure MongoDB is running on your system.

Example MongoDB configuration:

spring.data.mongodb.uri=mongodb://localhost:27017/bookstore


If you are using MongoDB Atlas, replace the URI with your MongoDB Atlas connection string.

▶️ Running the Application

The application consists of two parts:

Backend
Frontend

Both need to be running.

🚀 Start the Backend

Open a terminal and navigate to the backend directory:

cd backend

Linux / macOS
./mvnw spring-boot:run

Windows
mvnw.cmd spring-boot:run


The backend will start at:

http://localhost:8080

🌐 Start the Frontend

Open another terminal.

Navigate to the frontend directory:

cd frontend


Install dependencies:

npm install


Start the application:

npm start


The frontend will start at:

http://localhost:3000

🔌 API Documentation
👤 User APIs
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login an existing user
📚 Book APIs
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/{id}	Get book by ID
POST	/api/books	Add a new book
PUT	/api/books/{id}	Update an existing book
DELETE	/api/books/{id}	Delete a book
GET	/api/books/search?title={title}	Search books by title
GET	/api/books/category/{category}	Get books by category
📝 API Examples
Register User
Request
POST http://localhost:8080/api/users/register

Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}

Login User
Request
POST http://localhost:8080/api/users/login

Request Body
{
  "email": "john@example.com",
  "password": "password123"
}

Get All Books
Request
GET http://localhost:8080/api/books

Get Book by ID
Request
GET http://localhost:8080/api/books/{id}

Add New Book
Request
POST http://localhost:8080/api/books

Request Body
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 299,
  "category": "Fiction",
  "description": "A story about following your dreams.",
  "imageUrl": "https://example.com/book.jpg",
  "stock": 10
}

Update Book
Request
PUT http://localhost:8080/api/books/{id}

Request Body
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 349,
  "category": "Fiction",
  "description": "A story about following your dreams.",
  "imageUrl": "https://example.com/book.jpg",
  "stock": 15
}

Delete Book
Request
DELETE http://localhost:8080/api/books/{id}

Search Books
Request
GET http://localhost:8080/api/books/search?title=alchemist

Filter Books by Category
Request
GET http://localhost:8080/api/books/category/Fiction

🔐 Security

The application uses Spring Security and BCrypt password hashing for user authentication and password protection.

Security Practices
Passwords are hashed using BCrypt
User input is validated
Database credentials should not be exposed
Sensitive configuration should not be committed to GitHub
Environment variables should be used for production credentials

For production applications, JWT-based authentication and role-based authorization can be added.

🧪 Testing
Frontend Testing

Navigate to the frontend directory:

cd frontend


Run the tests:

npm test

Backend Testing

Navigate to the backend directory:

cd backend

Linux / macOS
./mvnw test

Windows
mvnw.cmd test

📦 Production Build
Frontend Production Build

Navigate to the frontend:

cd frontend


Create a production build:

npm run build


The production files will be generated inside:

frontend/build/

Backend Production Build

Navigate to the backend:

cd backend


Build the application:

./mvnw clean package


For Windows:

mvnw.cmd clean package


The generated JAR file will be available inside:

backend/target/

🔮 Future Enhancements

The following features can be added in future versions:

🛒 Shopping cart
💳 Online payment integration
📦 Order management
❤️ Wishlist
⭐ Book reviews and ratings
🔎 Advanced search
📄 Pagination
👨‍💼 Admin dashboard
🔐 JWT authentication
👥 Role-based authorization
🖼️ Book image upload
📊 Sales dashboard
📈 Inventory management
📧 Email notifications
🐳 Docker support
☁️ Cloud deployment
🤝 Contributing

Contributions are welcome and appreciated.

Steps to Contribute

Fork the repository.

Clone your fork:

git clone https://github.com/vrd2003/book_store.git

Create a new branch:
git checkout -b feature/new-feature


Make your changes.

Add your changes:

git add .

Commit your changes:
git commit -m "Add new feature"

Push your branch:
git push origin feature/new-feature

Create a Pull Request.
📄 License

This project currently does not specify an open-source license.

If you plan to distribute or open-source this project, add an appropriate LICENSE file.

👨‍💻 Author

VRD2003

GitHub:

https://github.com/vrd2003

⭐ Support

If you like this project, please consider giving the repository a ⭐ Star on GitHub.

🚀 Quick Start
# Clone repository
git clone https://github.com/vrd2003/book_store.git

# Navigate to project
cd book_store

# Start backend
cd backend
./mvnw spring-boot:run

# Open another terminal
cd frontend

# Install dependencies
npm install

# Start frontend
npm start

🌐 Application URLs
Application	URL
Frontend	http://localhost:3000
Backend	http://localhost:8080
📌 Repository

https://github.com/vrd2003/book_store

Built with ❤️ using React, TypeScript, Spring Boot, MySQL, and MongoDB.
