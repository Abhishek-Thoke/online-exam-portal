package com.project.commun;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Email_Select {
	// this is resposnsible to send message
		public static void sendEmail(String to) {	
			String host = "smtp.gmail.com";
			
			Properties properties = System.getProperties();
		    System.out.println("PROPERTIES"+properties);
		    
		    properties.put("mail.smtp.host",host);
		    properties.put("mail.smtp.port","465");
		    properties.put("mail.smtp.ssl.enable","true");
		    properties.put("mail.smtp.auth","true");
		    
		  Session session = Session.getInstance(properties, new Authenticator()
				  {

					@Override
					protected PasswordAuthentication getPasswordAuthentication() {
						// TODO Auto-generated method stub
						return  new PasswordAuthentication("huntingenuity@gmail.com","wzswbdfokdtnycms");         	
				  }		          
				  });
		
		     session.setDebug(true);
		  // composing Message
		        MimeMessage m = new MimeMessage(session);
		        try {
					m.setFrom("huntingenuity@gmail.com");
					
					// add recepient
					m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
	               
					m.setSubject("This is Regarding Selection for examination");
					m.setText("You have been selected for the examination.");
					
					// sending a Message using Transport class
					Transport.send(m);
					System.out.println("Email Sent Successfully....");
		        } catch (MessagingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        
		}


}
