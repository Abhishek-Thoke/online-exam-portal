package com.project.service;

import com.project.entities.Post_Job;
import com.project.entities.Ques;
import com.project.entities.Result;

public interface CompanyService {
	
	public Post_Job addJob(Post_Job job);
	
	public Ques addQues(Ques q);
	
	public Ques updateQues(Long quesid,Ques detachedQues);
	
	public Result addResult(Result r);

}