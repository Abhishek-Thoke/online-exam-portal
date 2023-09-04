package com.project.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.project.entities.Apply_job;
import com.project.entities.Post_Job;
import com.project.entities.Ques;


public interface StudentService {
	public List<Apply_job> showApplied();
	
	public List<Ques> getAllQues();
	
	public List<Post_Job> showPostJob();
}
