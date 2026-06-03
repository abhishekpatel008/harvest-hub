package com.h_hub.harvesthub.dto;

import java.math.BigDecimal;
import java.time.Instant;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private Long id;
    private String title;
    private String farmName;
    private String descreption;
    private BigDecimal price;
    private String imageUrl;
    private Instant createdAt;
}
