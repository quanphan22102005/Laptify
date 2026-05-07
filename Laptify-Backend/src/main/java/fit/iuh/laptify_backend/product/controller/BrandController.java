package fit.iuh.laptify_backend.product.controller;

import fit.iuh.laptify_backend.product.dto.common.PageRequest;
import fit.iuh.laptify_backend.product.dto.common.PageResponse;
import fit.iuh.laptify_backend.product.dto.response.BrandResponse;
import fit.iuh.laptify_backend.product.dto.response.CategoryResponse;
import fit.iuh.laptify_backend.product.dto.response.ProductResponse;
import fit.iuh.laptify_backend.product.service.BrandService;
import fit.iuh.laptify_backend.product.service.CategoryService;
import fit.iuh.laptify_backend.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/brands")
@Slf4j
@RequiredArgsConstructor
public class BrandController {
    private final BrandService brandService;

    @GetMapping()
    public ResponseEntity<List<BrandResponse>> getBrands()
    {
        return ResponseEntity.ok(brandService.getBrands());
    }
}

