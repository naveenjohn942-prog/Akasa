package com.user.cartservice.service;

import com.user.inventoryservice.model.dto.InventoryItemDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "InventoryService")
public interface InventoryServiceFeignClient {
    @GetMapping("/items/{id}")
    ResponseEntity<InventoryItemDTO> getItemById(@PathVariable("id") Long id);
}
