package com.project.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.project.entities.AppUser;

public interface UserRepo extends JpaRepository<AppUser, Long>{
        AppUser findByEmail(String email);
        
        AppUser findByEmailAndPassword(String email, String password);
        
        Optional<AppUser> findById(Long id);
        
}
