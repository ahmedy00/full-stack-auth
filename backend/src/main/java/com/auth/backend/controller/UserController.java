package com.auth.backend.controller;

import com.auth.backend.entity.User;
import com.auth.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/users/{userId}")
    public Optional<User> getUserById(@PathVariable Long userId) {
        return userService.getUserById(userId);
    }

    @GetMapping("/users/currentUser")
    public User getCurrentUser(Principal principal) {
        String username = principal.getName();
        return userService.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @DeleteMapping("/users/{userId}")
    public void removeUser(@PathVariable Long userId) {
        userService.removeUser(userId);
    }
}
