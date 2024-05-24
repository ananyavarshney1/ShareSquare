package com.sts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sts.model.WishlistItem;
import com.sts.repository.WishlistRepository;
import java.util.List;

@Service
public class WishlistService {
    @Autowired
    private WishlistRepository wishlistRepository;

    public WishlistItem addWishlistItem(WishlistItem item) {
        return wishlistRepository.save(item);
    }

    public void removeWishlistItem(int id) {
        wishlistRepository.deleteById(id);
    }

    public List<WishlistItem> getWishlist() {
        return wishlistRepository.findAll();
    }
}
