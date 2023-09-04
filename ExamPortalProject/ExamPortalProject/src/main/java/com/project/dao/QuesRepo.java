package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entities.Apply_job;
import com.project.entities.Ques;

public interface QuesRepo extends JpaRepository<Ques, Long> {
	
}
