package com.DezyKode.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DezyKode.model.Subscriber;

@Repository
public interface SubscriberRepository extends JpaRepository<Subscriber, Long>{
	
}

