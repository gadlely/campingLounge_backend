package com.project01_teamA.camping_lounge.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SecurityKeyService {

    @Value("${securityKey}") private String securityKey;

    public boolean validateSecurityKey(String inputKey) {
        return securityKey.equals(inputKey);
    }

}
