package com.project.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "t_ques")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Ques extends BaseEntity{
	
	@NonNull
	@Length(max=256)
	private String question;
	
	@NonNull
	@Length(max=45)
	private String option_a;
	
	@NonNull
	@Length(max=45)
	private String option_b;
	@Length(max=45)
	private String option_c;
	@Length(max=45)
	private String option_d;
	@Length(max=45)
    private String correct_ans;	
	
	@ManyToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="company_id", nullable = false)
	private AppUser company_id;

}
