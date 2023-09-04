package com.project.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

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
