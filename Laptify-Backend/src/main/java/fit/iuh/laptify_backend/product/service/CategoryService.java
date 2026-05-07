package fit.iuh.laptify_backend.product.service;

import fit.iuh.laptify_backend.product.dto.response.CategoryResponse;

import java.util.List;

public interface CategoryService {
    List<CategoryResponse> getCategories();
}
