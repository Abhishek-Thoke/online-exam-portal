package com.project.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "t_user_type")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class User_Type extends BaseEntity{
	
//	@OneToMany(mappedBy = "user_type_id")
    
//	@Id
//    private int id;
	
    @NotNull(message = "Role must be supplied")
	@Column(length = 20)
	private String user_type;
	
//	@OneToMany(mappedBy = "user_type_id" , cascade = CascadeType.ALL)
//	private User user;
	
	

}
