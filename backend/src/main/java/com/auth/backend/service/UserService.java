package com.auth.backend.service;

import com.auth.backend.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> getUsers();
    User addUser(User user);
    Optional<User> getUserById(Long userId);
    Optional<User> findByUsername(String username);
}
