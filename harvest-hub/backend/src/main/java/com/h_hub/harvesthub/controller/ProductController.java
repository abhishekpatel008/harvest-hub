package com.h_hub.harvesthub.controller;

import java.util.List;

import com.h_hub.harvesthub.service.IProductService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.h_hub.harvesthub.dto.ProductDto;
import com.h_hub.harvesthub.entity.Product;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final IProductService iProductService;

    @GetMapping
    public List<ProductDto> getProducts() {
        List<ProductDto> productList = iProductService.getProducts();
        return productList;
    }
}
