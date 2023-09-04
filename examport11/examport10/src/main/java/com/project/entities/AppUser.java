package com.project.entities;

	import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
	import javax.persistence.Entity;
	import javax.persistence.JoinColumn;
	import javax.persistence.ManyToOne;
	import javax.persistence.Table;
	import javax.validation.constraints.NotBlank;
	import javax.validation.constraints.NotNull;

	import org.hibernate.validator.constraints.Length;
	import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import com.fasterxml.jackson.annotation.JsonProperty;
	import com.fasterxml.jackson.annotation.JsonProperty.Access;

	import lombok.AllArgsConstructor;
	import lombok.Getter;
	import lombok.NoArgsConstructor;
	import lombok.Setter;
	import lombok.ToString;

	@Entity
	@Table(name = "t_registration")
	@NoArgsConstructor
	@AllArgsConstructor
	@Getter
	@Setter
	@ToString
	public class AppUser extends BaseEntity {
		@NotNull(message = "name can't be blank")
		@Column(length = 30)
		private String name;
		
		@NotNull(message = "address can't be blank")
		@Column(length = 300)
		private String address;
		
		@NotNull(message = "city can't be blank")
		@Column(length = 20)
		private String city;
		
		@NotNull(message = "state can't be blank")
		@Column(length = 20)
		private String state;
		
		@NotNull(message = "pincode can't be blank")
		@Column(length = 6)
		private String pincode;
		
		@NotNull(message = "email must be supplied")
		@Column(length = 30 , unique = true)
		private String email;
		
		@NotNull(message = "phone no must be supplied")
		@Column(length = 13)
		private String mobile_no;
		
		@NotNull(message = "password must be supplied")
//		@Length(min=8,max=20,message = "Invalid Password!!!!!!")
		@Length(max = 16)
		private String password;
		
			
		@NotNull(message = "dob must be supplied")
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private LocalDate dob;
		
		@Column(length = 1)
		private String gender;
		
		@Column(length = 20)
		private String contact_person;
		
		@Column(length = 30)
		private String company_website;
		
		@Column(length = 30)
		private String role_in_company;
		
		
		@Column(length = 300)
		private String qualification_details;
		
//		@Column(length = 500)
//		private String user_token;

		@ManyToOne(cascade=CascadeType.REMOVE)
		@JoinColumn(name="user_type_id", nullable = false)
		private User_Type user_type_id;
		

		public User toUser() {
			SimpleGrantedAuthority authority = new SimpleGrantedAuthority(user_type_id.toString());
			User user = new User(email, password, 
					Collections.singletonList(authority));
			return user;
		}



	}


