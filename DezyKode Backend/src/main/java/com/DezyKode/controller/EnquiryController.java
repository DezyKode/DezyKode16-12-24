package com.DezyKode.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DezyKode.model.Enquiry;
import com.DezyKode.repo.EnquiryRepo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "*") 
@RestController
public class EnquiryController {

    @Autowired
    private EnquiryRepo repo; // Inject the repository

    // Define the POST API to add enquiry
    @PostMapping("/api/enquiries")
    public ResponseEntity<Enquiry> createEnquiry(@RequestBody Enquiry enquiry) {
        System.out.println("Enquiry added");

        // Save the enquiry using the repository
        Enquiry savedEnquiry = repo.save(enquiry);

        // Return a ResponseEntity with the saved entity and HTTP status 201 Created
        return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);
    }
}
