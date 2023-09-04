package com.project.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.custom_exceptions.ResourceNotFoundException;
import com.project.dao.UserRepo;
import com.project.entities.AppUser;
import com.project.security.CryptWithMD5;


@Service
@Transactional
public class UserServiceImp implements UserService{

	@Autowired
	private UserRepo userRepo;
	
	
	
	@Override
	public AppUser addUserDetails(AppUser transientUser) {
		
		return userRepo.save(transientUser);
	}



	@Override
	public AppUser resetPassword(AppUser user, String password) {
		String pass = CryptWithMD5.cryptWithMD5(password);
		System.out.println(pass +" :: ");
		user.setPassword(pass);
		AppUser persistentUser = userRepo.save(user);
		return persistentUser;
	}



	@Override
	public AppUser checkEmail(String email) {
		AppUser user = userRepo.findByEmail(email);
		return user;
	}



	@Override
	public AppUser updateUserDetails(long userId, AppUser updatedDetachedUser) {
		// confirm if id exsists
				if (userRepo.existsById(userId)) {
					// =>user id found , update the details
					return userRepo.save(updatedDetachedUser);// update query : upon commit

				}
				// => no user :
				throw new ResourceNotFoundException("Invalid User Id !!!!!!!!!!!!!");

	}



	@Override
	public String deleteUserDetails(long userId) {
		// confirm if id exists
				AppUser user = userRepo.findById(userId).
						orElseThrow(() -> new ResourceNotFoundException("User Id Inavlid"));
				userRepo.deleteById(userId);
				return "User details deleted for user id "+userId;
	}
	
	
	
	@Override
	public Optional<AppUser> getUpdateUserDetails(long id) {
		// TODO Auto-generated method stub
		System.out.println("inside getUpdateUserDetails");
		Optional<AppUser> user=null;
		if (userRepo.existsById(id)) {
			System.out.println("inside getUpdateUserDetails service");
//			Optional<AppUser> user
			 user = userRepo.findById(id);
		}
		return user;
	}
	
	
	
}























//@Override
//public String addUserDetails(User user) {
//	
//	User newUser = getUserFromUserModel(user);
//	User persistentUser = userRepo.save(newUser);
//	System.out.println(persistentUser);
//	return "User registered with ID = "+persistentUser.getId();	
//	
//}
//private User getUserFromUserModel(User user) {
//	
//	return new User(user.getName(),user.getAddress(),user.getCity(),user.getState(),user.getPincode(),
//			        user.getEmail(),user.getMobile_no(),user.getPassword(),user.getDob(),user.getGender(),user.getContact_person()
//			        ,user.getCompany_website(),user.getRole_in_company(),user.getQualification_details()
//			        ,user.getUser_type());
//}
//



//User getUserFromUserModel(UserModel userModel) {
//	List<UserRole> roles = new ArrayList<UserRole>();
//	UserRole userRole = userRoleDao.findById(2L).get(); // as a customer
//	System.out.println("userRole ******* " + userRole);
//	roles.add(userRole);
//	long id = userRole.getId();
//	System.out.println("id ::: " +id);
//	return new User(userModel.getName(), userModel.getAddress(), 
//			userModel.getEmail(), userModel.getPassword(), userRole);
//}

