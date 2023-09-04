package com.project.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "t_Post_Job")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Post_Job extends BaseEntity{
	
	@NonNull
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate last_date;
	private int vacancy;
	
	@Length(max=100)
	private String skills;
	
	@NotNull
	@Length(max=20)
	private String required_qualification;
	
	private int max_age;
	
	@Length(max=20)
	private String job_location;
	private double salary;
	private int working_hours;
	
	@Length(max=256)
	private String description;
	
	@ManyToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="user_id", nullable = false)
	private AppUser user_id;
	
	
}