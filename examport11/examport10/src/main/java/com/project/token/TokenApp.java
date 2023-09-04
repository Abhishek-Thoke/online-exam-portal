package com.project.token;

import java.security.SecureRandom;
import java.util.Base64;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

public class TokenApp {

	private static final SecureRandom secureRandom = new SecureRandom();
	private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder();
	
	
	
	public static String getToken() {
		byte[] randomBytes = new byte[14];
		secureRandom.nextBytes(randomBytes);
		return base64Encoder.encodeToString(randomBytes);

	}
	}


