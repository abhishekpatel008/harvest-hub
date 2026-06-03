package com.h_hub.harvesthub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
@EntityScan
// @ComponentScan is optional as system will scan the entire package
public class HarvesthubApplication {

	public static void main(String[] args) {
		SpringApplication.run(HarvesthubApplication.class, args);
	}

}
