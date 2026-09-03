package com.example.backend.model;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {
    @Id
    private String id;

    @NotBlank
    private String title;

    @NotBlank
    private String author;

    @NotNull
    @DecimalMin(value = "0.0")
    private Double price;

    @NotBlank
    private String category;

    private String description;
    private String imageUrl;

    @PositiveOrZero
    private Integer stock = 0;

    public Book() {}

    public Book(String id, String title, String author, Double price, String category,
                String description, String imageUrl, Integer stock) {
        this.id = id; this.title = title; this.author = author; this.price = price;
        this.category = category; this.description = description; this.imageUrl = imageUrl;
        this.stock = stock;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }
}