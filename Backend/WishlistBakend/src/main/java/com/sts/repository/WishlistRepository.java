package com.sts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sts.model.WishlistItem;

@Repository
public interface WishlistRepository extends JpaRepository<WishlistItem, Integer> {
	 WishlistItem findByTitle(String title);
}
