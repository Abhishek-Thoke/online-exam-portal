package com.project.service;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;

import com.project.entities.AppUser;

public interface UserService {
//	String addUserDetails(User user);
	
	AppUser addUserDetails(AppUser transientUser);
	
	AppUser resetPassword(AppUser user, String password);
	
	AppUser checkEmail(String email);
	
	//add a method to update user details
	AppUser updateUserDetails(long userId,AppUser updatedDetachedUser);
	//add a method to delete user details
	String deleteUserDetails(long userId);
	public Optional<AppUser> getUpdateUserDetails(long id) ;
	
	
	
	
}
