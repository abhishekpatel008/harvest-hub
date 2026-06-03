package com.h_hub.harvesthub.service;

import com.h_hub.harvesthub.dto.ProductDto;
import java.util.List;

public interface IProductService {
    List<ProductDto> getProducts();
}
