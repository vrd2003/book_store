📚 Book Store

A full-stack Book Store Web Application built using React, TypeScript, Spring Boot, MySQL, and MongoDB. The application allows users to register and log in, browse books, search and filter books, and provides book management functionality through REST APIs.

📌 Project Overview

The Book Store is designed as a full-stack web application with a separate frontend and backend.

The frontend is developed using React and TypeScript, providing a responsive and user-friendly interface.

The backend is developed using Spring Boot and exposes RESTful APIs for user authentication and book management.

The application uses:

MySQL for storing user-related information.
MongoDB for storing book-related information.
🚀 Features
👤 User Features
User registration
User login
Password encryption using BCrypt
Input validation
User data management
📖 Book Features
Display all available books
View book details
Search books by title
Filter books by category
Add new books
Update book information
Delete books
Manage book price and stock
Store book descriptions and images
💻 Application Features
RESTful API architecture
React-based user interface
TypeScript support
Responsive design
MySQL database integration
MongoDB database integration
Spring Security integration
Maven-based backend project
🛠️ Technologies Used
Frontend
Technology	Purpose
React	Frontend UI
TypeScript	Type-safe JavaScript
Tailwind CSS	Styling
Axios	API communication
React DOM	Rendering UI
npm	Package management
Backend
Technology	Purpose
Java 21	Programming language
Spring Boot	Backend framework
Spring Web	REST APIs
Spring Data JPA	MySQL database interaction
Spring Data MongoDB	MongoDB integration
Spring Security	Security
Bean Validation	Input validation
BCrypt	Password encryption
Lombok	Reduce boilerplate code
Maven	Dependency management
Database
Database	Purpose
MySQL	User information
MongoDB	Book information
🏗️ Project Architecture
                    ┌─────────────────────┐
                    │      User           │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │ React + TypeScript  │
                    │    Tailwind CSS     │
                    └──────────┬──────────┘
                               │
                          REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Spring Boot API   │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │      MySQL      │        │     MongoDB     │
        │                 │        │                 │
        │  User Data      │        │   Book Data     │
        └─────────────────┘        └─────────────────┘

📂 Project Structure
book_store/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── ...
│   │       └── resources/
│   │           └── application.properties
│   │
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── .gitignore
└── README.md

⚙️ Installation and Setup
1. Prerequisites

Before running the project, make sure the following are installed:

Java 21 or higher
Node.js
npm
Maven
MySQL
MongoDB
Git
2. Clone the Repository
git clone https://github.com/vrd2003/book_store.git


Navigate to the project directory:

cd book_store

🗄️ Database Configuration
MySQL

Start your MySQL server and create the required database.

CREATE DATABASE bookstore;


Configure the MySQL username, password, and database connection in:

backend/src/main/resources/application.properties


Example:

spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD


Update the database username and password according to your local MySQL configuration.

MongoDB

Make sure MongoDB is installed and running on your system.

Configure the MongoDB connection in:

backend/src/main/resources/application.properties


Example:

spring.data.mongodb.uri=mongodb://localhost:27017/bookstore


Update the MongoDB configuration if you are using MongoDB Atlas or a different database configuration.

▶️ Running the Backend

Open a terminal and navigate to the backend directory:

cd backend

Linux / macOS
./mvnw spring-boot:run

Windows
mvnw.cmd spring-boot:run


The backend will start on:

http://localhost:8080

🌐 Running the Frontend

Open another terminal and navigate to the frontend directory:

cd frontend


Install the dependencies:

npm install


Start the development server:

npm start


The frontend will be available at:

http://localhost:3000

🔌 API Documentation
👤 User APIs
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login user
📚 Book APIs
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/{id}	Get book by ID
POST	/api/books	Add a new book
PUT	/api/books/{id}	Update a book
DELETE	/api/books/{id}	Delete a book
GET	/api/books/search?title={title}	Search books by title
GET	/api/books/category/{category}	Get books by category
📝 API Examples
Register User

POST

/api/users/register


Request body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}

Login User

POST

/api/users/login


Request body:

{
  "email": "john@example.com",
  "password": "password123"
}

Add Book

POST

/api/books


Request body:

{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 299,
  "category": "Fiction",
  "description": "A story about following your dreams.",
  "imageUrl": "https://example.com/book.jpg",
  "stock": 10
}

🔐 Security

The application uses Spring Security and BCrypt password hashing to improve the security of user credentials.

Sensitive configuration such as database passwords should not be committed to GitHub.

For production deployment, environment variables should be used for database credentials and other sensitive configuration.

🧪 Testing
Frontend Tests

Navigate to the frontend directory:

cd frontend


Run:

npm test

Backend Tests

Navigate to the backend directory:

cd backend


Run:

./mvnw test


For Windows:

mvnw.cmd test

📦 Production Build
Frontend

Create a production build using:

cd frontend
npm run build


The production files will be generated in:

frontend/build/

Backend

Create the backend package using:

cd backend
./mvnw clean package


The generated JAR file will be available in:

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
🔐 JWT-based authentication
👥 Role-based authorization
🖼️ Book image upload
📊 Sales and inventory dashboard
🐳 Docker support
☁️ Cloud deployment
🤝 Contributing

Contributions are welcome.

Fork the repository.
Create a new branch.
git checkout -b feature/new-feature

Make your changes.
Commit your changes.
git add .
git commit -m "Add new feature"

Push your branch.
git push origin feature/new-feature

Create a Pull Request.
📄 License

This project currently does not include a specific open-source license.

If you plan to distribute or open-source this project, it is recommended to add an appropriate license.

👨‍💻 Author

VRD2003

GitHub Repository:

https://github.com/vrd2003/book_store

⭐ Support

If you found this project useful, please consider giving the repository a ⭐ Star on GitHub.

📌 Quick Start

For a quick setup:

# Clone project
git clone https://github.com/vrd2003/book_store.git

# Start backend
cd book_store/backend
./mvnw spring-boot:run

# In another terminal, start frontend
cd book_store/frontend
npm install
npm start


Then open:

Frontend: http://localhost:3000
Backend:  http://localhost:8080


Built with ❤️ using React, Spring Boot, MySQL, and MongoDB.
