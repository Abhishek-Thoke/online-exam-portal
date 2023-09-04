package com.project.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dao.Apply_Job_Repo;
import com.project.dao.QuesRepo;
import com.project.entities.Apply_job;
import com.project.entities.Post_Job;
import com.project.entities.Ques;
import com.project.service.StudentService;

@CrossOrigin
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired    
	private Apply_Job_Repo studentRepo;
    
   @Autowired
   private StudentService studentServ;
	
    @PostMapping("/applyjob")
    public ResponseEntity<?> applyJob(@RequestBody @Valid Apply_job job){
	    Post_Job postJobId=job.getPost_job_id();
		studentRepo.save(job);
		
		return  new ResponseEntity<>("Apply seccessfully .. ",HttpStatus.OK);
		
	}
    @GetMapping("/showcompany")
    public ResponseEntity<?> showCompany()
    {
        System.out.println("inside show company controller");
        List<Post_Job> job = studentServ.showPostJob();
    	return  new ResponseEntity<>(job,HttpStatus.OK);    	
    }
    
    @GetMapping("/getQues/{companyid}")
	public  ResponseEntity<?> showExam(@PathVariable Long companyid)
	{
	    List<Ques> qlist=studentServ.getAllQues();
	    List<Ques> examQues=new ArrayList<>();
	    for (Ques ques : qlist) {
	    	if(ques.getCompany_id().getId()==companyid)
	    	{
	    		examQues.add(ques);
	    	}
	    }
		 return  new ResponseEntity<>(examQues,HttpStatus.OK); 	
	}
}
