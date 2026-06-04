package com.h_hub.harvesthub.dto;

import java.math.BigDecimal;
import java.time.Instant;

public class ProductDto {
    private Long id;
    private String title;
    private String farmName;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private Instant createdAt;

    // Getters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getFarmName() {
        return farmName;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setFarmName(String farmName) {
        this.farmName = farmName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}