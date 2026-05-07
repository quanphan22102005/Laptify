package fit.iuh.laptify_backend.product.service;

import fit.iuh.laptify_backend.product.dto.response.BrandResponse;
import fit.iuh.laptify_backend.product.dto.response.CategoryResponse;
import fit.iuh.laptify_backend.product.entity.Brand;

import java.util.List;

public interface BrandService {
    List<BrandResponse> getBrands();
}
