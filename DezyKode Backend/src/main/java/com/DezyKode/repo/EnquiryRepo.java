package com.DezyKode.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DezyKode.model.Enquiry;

@Repository
public interface EnquiryRepo extends JpaRepository<Enquiry, Long>{

}
