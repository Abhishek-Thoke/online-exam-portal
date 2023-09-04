package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Result;

public interface ResultRepo extends JpaRepository<Result, Long> {
	
	

}
