package com.sts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sts.model.WishlistItem;
import com.sts.service.WishlistService;
import java.util.List;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @PostMapping("/add")
    public ResponseEntity<WishlistItem> addToWishlist(@RequestBody WishlistItem item) {
        WishlistItem savedItem = wishlistService.addWishlistItem(item);
        return ResponseEntity.ok(savedItem);
    }

    @GetMapping
    public ResponseEntity<List<WishlistItem>> getWishlist() {
        List<WishlistItem> wishlist = wishlistService.getWishlist();
        return ResponseEntity.ok(wishlist);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<Void> removeFromWishlist(@PathVariable int id) {
        wishlistService.removeWishlistItem(id);
        return ResponseEntity.noContent().build();
    }
}


