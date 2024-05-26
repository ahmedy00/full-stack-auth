package com.auth.backend.entity;

import com.auth.backend.entity.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String username;
    String email;
    String fullName;
    String password;

    @Enumerated(EnumType.STRING)
    Role role;

}
