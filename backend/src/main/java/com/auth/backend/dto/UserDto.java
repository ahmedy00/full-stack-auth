package com.auth.backend.dto;

import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String fullName;
    private String password;
}