package fit.iuh.laptify_backend.product.service.impl;

import fit.iuh.laptify_backend.product.dto.response.BrandResponse;
import fit.iuh.laptify_backend.product.dto.response.CategoryResponse;
import fit.iuh.laptify_backend.product.entity.Brand;
import fit.iuh.laptify_backend.product.entity.Category;
import fit.iuh.laptify_backend.product.repository.BrandRepository;
import fit.iuh.laptify_backend.product.service.BrandService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BrandServiceImpl implements BrandService {
    private final BrandRepository brandRepository;
    @Override
    public List<BrandResponse> getBrands() {
        var res = brandRepository.findAll();
        return res.stream().map(this::mapEntityToResponse).toList();
    }

    private BrandResponse mapEntityToResponse(Brand category){
        return new BrandResponse(category.getId(), category.getName());
    }
}
