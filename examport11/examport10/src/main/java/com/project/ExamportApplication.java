package com.project;

import java.security.SecureRandom;
import java.util.Base64;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
public class ExamportApplication {

	
	private static final SecureRandom secureRandom = new SecureRandom();
	private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder();
	
	public static void main(String[] args) {
		SpringApplication.run(ExamportApplication.class, args);
	}
	
//	@Bean
//	public PasswordEncoder passwordencoder() {
//		PasswordEncoder encoder = new BCryptPasswordEncoder();
//		return encoder;
//	}
	
	@Bean
	public static String getToken() {
		byte[] randomBytes = new byte[14];
		secureRandom.nextBytes(randomBytes);
		return base64Encoder.encodeToString(randomBytes);

	}


}
