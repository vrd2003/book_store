# Online Book Store Backend

Spring Boot REST backend using:
- MySQL: users/registration data
- MongoDB: book catalogue
- Spring Data JPA
- Spring Data MongoDB
- Spring Security password hashing
- REST APIs
- Bean Validation

## Run
1. Start MySQL and MongoDB.
2. In `src/main/resources/application.properties`, set `spring.datasource.password`.
3. Create MySQL database manually if needed:
   `CREATE DATABASE bookstore;`
4. Run:
   `./mvnw spring-boot:run` (Linux/macOS)
   `mvnw.cmd spring-boot:run` (Windows)

## APIs
### Users
POST `/api/users/register`
POST `/api/users/login`

### Books
GET `/api/books`
GET `/api/books/{id}`
POST `/api/books`
PUT `/api/books/{id}`
DELETE `/api/books/{id}`
GET `/api/books/search?title=alchemist`
GET `/api/books/category/Fiction`

## Postman examples

Register:
POST `http://localhost:8080/api/users/register`
```json
{
  "name": "Viraj",
  "email": "viraj@gmail.com",
  "password": "123456",
  "phone": "9876543210"
}
```

Login:
POST `http://localhost:8080/api/users/login`
```json
{
  "email": "viraj@gmail.com",
  "password": "123456"
}
```

Create book:
POST `http://localhost:8080/api/books`
```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 299,
  "category": "Fiction",
  "description": "A young shepherd follows his dream.",
  "imageUrl": "https://example.com/book.jpg",
  "stock": 10
}
```

Note: This starter uses BCrypt for password hashing, but the login endpoint is intentionally simple and does not issue a JWT. For a production authentication system, add JWT/session-based authentication and protect admin-only book CRUD operations.
