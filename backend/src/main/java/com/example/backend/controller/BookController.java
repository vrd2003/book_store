package com.example.backend.controller;

import com.example.backend.model.Book;
import com.example.backend.service.BookService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return service.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable String id) {
        return service.getBookById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@Valid @RequestBody Book book) {
        return service.createBook(book);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable String id, @Valid @RequestBody Book book) {
        return service.updateBook(id, book);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable String id) {
        service.deleteBook(id);
    }

    @GetMapping("/search")
    public List<Book> search(@RequestParam String title) {
        return service.search(title);
    }

    @GetMapping("/category/{category}")
    public List<Book> category(@PathVariable String category) {
        return service.byCategory(category);
    }
}