package com.project.entities;

import java.time.LocalDate;


import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "t_apply_job")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Apply_job extends BaseEntity{

	private boolean isApplied;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate application_date;
	
	@ManyToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="user_id", nullable = false)
	private AppUser user_id;
	
	@ManyToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="post_job_id", nullable = false)
	private Post_Job post_job_id;

}
