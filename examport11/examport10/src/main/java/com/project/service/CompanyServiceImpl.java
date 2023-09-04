package com.project.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.custom_exceptions.ResourceNotFoundException;
import com.project.dao.Post_Job_Repo;
import com.project.dao.QuesRepo;
import com.project.dao.ResultRepo;
import com.project.entities.Post_Job;
import com.project.entities.Ques;
import com.project.entities.Result;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	private Post_Job_Repo compRepo;
	
	@Autowired 
	private QuesRepo qRepo;
	
	@Autowired
	private ResultRepo rRepo;

	@Override
	public Post_Job addJob(Post_Job job) {
		return compRepo.save(job);
	}

	@Override
	public Ques addQues(Ques q) {
		System.out.println(" inside add question");
		return qRepo.save(q);
	}

	@Override
	public Ques updateQues(Long quesid, Ques detachedQues) {
		if (qRepo.existsById(quesid)) {
			return qRepo.save(detachedQues);
		}
		throw new ResourceNotFoundException("Invalid Ques Id !!!!!!!!!!!!!");
	}
	
	
	@Override
	public Result addResult(Result r) {
		System.out.println("inside addResult");
		return rRepo.save(r);
	}

}