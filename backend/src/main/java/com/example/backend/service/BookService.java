package com.example.backend.service;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Book;
import com.example.backend.repository.BookRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {
    private final BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public List<Book> getAllBooks() { return repository.findAll(); }

    public Book getBookById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found: " + id));
    }

    public Book createBook(Book book) { return repository.save(book); }

    public Book updateBook(String id, Book updated) {
        Book existing = getBookById(id);
        existing.setTitle(updated.getTitle());
        existing.setAuthor(updated.getAuthor());
        existing.setPrice(updated.getPrice());
        existing.setCategory(updated.getCategory());
        existing.setDescription(updated.getDescription());
        existing.setImageUrl(updated.getImageUrl());
        existing.setStock(updated.getStock());
        return repository.save(existing);
    }

    public void deleteBook(String id) {
        if (!repository.existsById(id))
            throw new ResourceNotFoundException("Book not found: " + id);
        repository.deleteById(id);
    }

    public List<Book> search(String title) {
        return repository.findByTitleContainingIgnoreCase(title);
    }

    public List<Book> byCategory(String category) {
        return repository.findByCategoryIgnoreCase(category);
    }
}