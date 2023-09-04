package com.project.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.commun.Email_OTP;
import com.project.dao.UserRepo;
import com.project.dto.LoginDto;
import com.project.entities.AppUser;
import com.project.pojos.Credentials;
import com.project.security.CryptWithMD5;
import com.project.service.UserService;
import com.project.token.TokenApp;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService; 

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private AuthenticationManager authenticationManager;

	//	@Autowired
	//	private TokenApp token1;
	
	@Autowired
	private AuthenticationManager manager;
	

	@PostMapping
	public ResponseEntity<?> addNewUser(@RequestBody @Valid AppUser transientUser) // @RequestBody : un amrashlling (json ---> java)
	{
		System.out.println("in add user " + transientUser);
		
		String password=CryptWithMD5.cryptWithMD5(transientUser.getPassword());
		transientUser.setPassword(password);
		return  new ResponseEntity<>(userService.addUserDetails(transientUser),HttpStatus.CREATED);

	}

	

//	@PostMapping("/login")
//	public ResponseEntity<String> authenticateUser(@RequestBody LoginDto loginDto){
//		System.out.println(loginDto.getEmail() +"  " + loginDto.getPassword());
//		
//		Authentication auth =new UsernamePasswordAuthenticationToken(loginDto.getEmail(), CryptWithMD5.cryptWithMD5(loginDto.getPassword()));
//
//		System.out.println(auth);
//
//		auth = authenticationManager.authenticate(auth);
//
//		System.out.println(auth);
//		SecurityContextHolder.getContext().setAuthentication(auth);
//		return new ResponseEntity<>("User signed-in successfully!.", HttpStatus.OK);
//	}
	
	
	@PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDto loginDto){
		System.out.println(loginDto.getEmail() +"  " + loginDto.getPassword());     
	String password= CryptWithMD5.cryptWithMD5(loginDto.getPassword());
	loginDto.setPassword(password);
	Authentication auth =new UsernamePasswordAuthenticationToken(loginDto.getEmail(),loginDto.getPassword() );

		System.out.println(auth);

 		auth = authenticationManager.authenticate(auth);

		System.out.println(auth);
		//AppUser user = userRepo.findByEmail(loginDto.getEmail());
		AppUser user = userRepo.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
		SecurityContextHolder.getContext().setAuthentication(auth);
		return new ResponseEntity<>(user,HttpStatus.OK);
	
	}
	
	
//	@PostMapping("/resetPassword")
//	public ResponseEntity<String> resetPassword(@RequestBody Credentials cred){
//		System.out.println(cred.getEmail() +"  " + cred.getPassword());
//		AppUser checkUserEmail = userService.checkEmail(cred.getEmail());
//		System.out.println(checkUserEmail);
//		AppUser persistentUser = userService.resetPassword(checkUserEmail, cred.getPassword());
//		System.out.println(persistentUser);
//		if(persistentUser != null) {
//			System.out.println("password reset sucessfully");
//			return new ResponseEntity<>("Set password successfully",HttpStatus.OK);
//		}else {
//			return new ResponseEntity<>("Set password failed",HttpStatus.BAD_REQUEST);
//		}
//			
//		
//	}
	
	
	@PostMapping("/resetPassword")
	public ResponseEntity<String> resetPassword(@RequestBody Credentials cred){
		System.out.println(cred.getEmail() +"  " + cred.getPassword());
		AppUser checkUserEmail = userService.checkEmail(cred.getEmail());
		System.out.println(checkUserEmail);
        Email_OTP.sendEmail(cred.getEmail());
		AppUser persistentUser = userService.resetPassword(checkUserEmail, cred.getPassword());
		System.out.println(persistentUser);
		if(persistentUser != null) {
			System.out.println("password reset sucessfully");
			return new ResponseEntity<>("Set password successfully",HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Set password failed",HttpStatus.BAD_REQUEST);
		}
	
	}
	@GetMapping("/{id}")
	public Optional<AppUser> getUpdateUserDetails(@PathVariable long id)

	{
		System.out.println(" id=+++++" + id);
		return userService.getUpdateUserDetails(id);
	}
	
	@PutMapping("/{id}")
	public AppUser updateUserDetails(@RequestBody AppUser detachedUser, @PathVariable long id)
	{
		System.out.println("in update " + detachedUser + " id=" + id);
		return userService.updateUserDetails(id, detachedUser);
	}

	// add a method to del user details
	@DeleteMapping("/{userId}")
	public String deleteUserDetails(@PathVariable long userId) {
		System.out.println("in del user " + userId);
		return userService.deleteUserDetails(userId);
	}

	
	
}
