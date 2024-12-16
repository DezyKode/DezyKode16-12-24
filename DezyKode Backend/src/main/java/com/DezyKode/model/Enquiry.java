package com.DezyKode.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Enquiry {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 20)
	private String firstName;
	@Column(length = 20)
	private String lastName;
	@Column(length = 20)
	private String phoneNumber;
	@Column(length = 30)
	private String emailAddress;
	@Column(length = 20)
	private String gender;
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String address;
	@Column(length = 20)
	private String state;
	@Column(length = 30)
	private String interestedFor;
	@Column(length = 30)
	private String educationLevel;
	@Column(length = 50)
	private String reference;

}
