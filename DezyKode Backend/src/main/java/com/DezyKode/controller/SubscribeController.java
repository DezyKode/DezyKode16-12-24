package com.DezyKode.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DezyKode.model.Subscriber;
import com.DezyKode.repo.SubscriberRepository;
@CrossOrigin("*")
@RestController
public class SubscribeController {

	@Autowired
	private SubscriberRepository subscriberRepository;
	
	@PostMapping("/api/subscribe")
	public Subscriber Push(@RequestBody Subscriber subscriber) {
		return subscriberRepository.save(subscriber);
	}
}
