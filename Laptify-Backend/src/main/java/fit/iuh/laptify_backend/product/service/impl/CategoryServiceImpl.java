package fit.iuh.laptify_backend.product.service.impl;

import fit.iuh.laptify_backend.product.dto.response.CategoryResponse;
import fit.iuh.laptify_backend.product.entity.Category;
import fit.iuh.laptify_backend.product.repository.CategoryRepository;
import fit.iuh.laptify_backend.product.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    @Override
    public List<CategoryResponse> getCategories() {
        var res = categoryRepository.findAll();
        return res.stream().map(this::mapEntityToResponse).toList();
    }

    private CategoryResponse mapEntityToResponse(Category category){
        return new CategoryResponse(category.getId(), category.getName());
    }
}
