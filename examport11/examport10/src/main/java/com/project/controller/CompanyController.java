package com.project.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.commun.Email_Select;
import com.project.custom_exceptions.ResourceNotFoundException;
import com.project.dao.QuesRepo;
import com.project.dao.UserRepo;
import com.project.entities.AppUser;
import com.project.entities.Apply_job;
import com.project.entities.Post_Job;
import com.project.entities.Ques;
import com.project.entities.Result;
import com.project.service.CompanyService;
import com.project.service.StudentService;

@RestController
@CrossOrigin
@RequestMapping("/company")
public class CompanyController {
	
	
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private QuesRepo quesRepo;
	
	@Autowired
	private CompanyService compServ;
	
	@Autowired
	private StudentService studServ;
	
     //method to post a new job--company can post jobs and can add info about the job
	@PostMapping("/addjob")
	public ResponseEntity<?> addNewJob(@RequestBody @Valid Post_Job job)
	{
		System.out.println("inside post job"+job.getId());
		return new ResponseEntity<>(compServ.addJob(job),HttpStatus.OK);
	}
	
	
	
	//this is the method which sends email to all the candidates who applied for a particular job
	//job id should be sent in the path
	@GetMapping("/{jobid}")
	public ResponseEntity<String> sendMailToCandidates(@PathVariable Long jobid)
	{
		List<Apply_job> list=studServ.showApplied();
		for (Apply_job apply_job : list) {
			if(apply_job.getPost_job_id().getId()==jobid)
			{
			  System.out.println("send mail");	
			  Email_Select.sendEmail(apply_job.getUser_id().getEmail());
			}
		}
		return new ResponseEntity<String>("mail sent to candidates",HttpStatus.OK);
	}
	
	@GetMapping("/candidate/{jobid}")
	public ResponseEntity<?> getCandidates(@PathVariable Long jobid)
	{
		List<Apply_job> list=studServ.showApplied();
		List<Optional<AppUser>> candidates=new ArrayList<>();
		for (Apply_job apply_job : list) {
			if(apply_job.getPost_job_id().getId()==jobid)
			{
			  Optional<AppUser> user=userRepo.findById(apply_job.getUser_id().getId());
			  candidates.add(user);
			}
		}
		return new ResponseEntity<>(candidates,HttpStatus.OK);
	}
	
	
	@PostMapping("/addQuest")
	public ResponseEntity<?> addQuestion(@RequestBody Ques q)
	{
	    System.out.println("add question controller");    	
		return new ResponseEntity<>(compServ.addQues(q),HttpStatus.CREATED) ;
	}
	
	@GetMapping("/getQuest/{companyid}")
	public ResponseEntity<?> getQuestions(@PathVariable Long companyid)
	{
		List<Ques> allques=quesRepo.findAll();
		List<Ques> list=new ArrayList<>();
		for (Ques ques : allques) {
			if(ques.getCompany_id().getId()==companyid)
			{
				list.add(ques);
			}
		}
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@DeleteMapping("deleteQuest/{questid}")
	public ResponseEntity<String> deleteQuestion(@PathVariable Long questid)
	{
		Ques q = quesRepo.findById(questid).
				orElseThrow(() -> new ResourceNotFoundException("User Id Inavlid"));
		quesRepo.deleteById(questid);
		return new ResponseEntity<String>("question deleted successfully",HttpStatus.OK) ;
	}
	

	@PutMapping("updateQuest/{questid}")
	public ResponseEntity<?> updateQuestion(@RequestBody Ques detachedQues, @PathVariable long questid)
	{
		System.out.println("in update " + detachedQues + " id=" + questid);
		return new ResponseEntity<>(compServ.updateQues(questid, detachedQues),HttpStatus.OK);
	}  
	
	
	@PostMapping("/result/{candidateid}")
	public ResponseEntity<?> addResult(@RequestBody Result result){
		
		return new ResponseEntity<>(compServ.addResult(result),HttpStatus.CREATED) ;
		
	}
	
	@GetMapping("/quest/{questid}")
	public ResponseEntity<?> getQuesToBeUpdated(@PathVariable Long questid)
	{
		Ques q = quesRepo.findById(questid).
				orElseThrow(() -> new ResourceNotFoundException("Id Invalid"));
		System.out.println("Quest to be updated"+q.getId());
		return new ResponseEntity<>(q,HttpStatus.OK);	
	}
	
	
}