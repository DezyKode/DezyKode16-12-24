package com.DezyKode.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DezyKode.model.Contact;
import com.DezyKode.repo.ContactRepo;

@CrossOrigin(origins = "*")
@RestController
public class ContactController {
	@Autowired
	private ContactRepo repo;

	@PostMapping("/api/contact")
	public ResponseEntity<Contact> submitContact(@RequestBody Contact contact) {
		System.out.println("details added");
		Contact saveContact = repo.save(contact);
		return new ResponseEntity<>(saveContact, HttpStatus.CREATED);
	}
}
