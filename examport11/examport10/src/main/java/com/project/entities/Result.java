package com.project.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.ManyToAny;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "t_Result")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Result extends BaseEntity{
   private String selected_ans;
   
   @ManyToOne
   @JoinColumn(name="candidate_id")
   private AppUser candidate_id;
   
   @ManyToOne
   @JoinColumn(name="company_id")
   private AppUser company_id;
}