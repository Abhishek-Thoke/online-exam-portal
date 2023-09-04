package com.project.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.Apply_Job_Repo;
import com.project.dao.Post_Job_Repo;
import com.project.dao.QuesRepo;
import com.project.entities.Apply_job;
import com.project.entities.Post_Job;
import com.project.entities.Ques;

@Service
@Transactional
public class StudentServiceImpl implements StudentService{

	@Autowired
    private Apply_Job_Repo applyJob;
	@Autowired
	private Post_Job_Repo postJob;
	@Autowired
	private QuesRepo queRepo;
	
	@Override
	public List<Apply_job> showApplied() {
		System.out.println("showing the list of candidates who applied for any job");
		return applyJob.findAll();
	}

	@Override
	public List<Ques> getAllQues(){
		return queRepo.findAll();
	}
	

	@Override
	public List<Post_Job> showPostJob() {
		System.out.println("Inside show all post job");
		return postJob.findAll();
	}

}
