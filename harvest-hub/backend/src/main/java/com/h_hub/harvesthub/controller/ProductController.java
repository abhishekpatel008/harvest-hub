package com.h_hub.harvesthub.controller;

import java.util.List;

import com.h_hub.harvesthub.entity.Product;
import com.h_hub.harvesthub.repository.ProductRepository;
import com.h_hub.harvesthub.service.IProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.h_hub.harvesthub.dto.ProductDto;

@RestController
@RequestMapping("api/v1/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final IProductService iProductService;
    private final ProductRepository productRepository;

    public ProductController(IProductService iProductService, ProductRepository productRepository) {
        this.iProductService = iProductService;
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<ProductDto> getProducts() {
        return iProductService.getProducts();
    }

    @GetMapping("/raw")
    public List<Product> getRaw() {
        return productRepository.findAll();
    }

    @GetMapping("/test")
    public String test() {
        List<Product> products = productRepository.findAll();
        if (products.isEmpty()) {
            return "No products found in database";
        }
        Product p = products.get(0);
        return "ID: " + p.getId() + ", Title: " + p.getTitle() + ", Description: " + p.getDescription();
    }
}