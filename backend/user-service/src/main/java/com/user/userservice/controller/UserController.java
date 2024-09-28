package com.user.userservice.controller;

import com.user.userservice.mapper.Mapper;
import com.user.userservice.model.Users;
import com.user.userservice.model.dto.UserDTO;
import com.user.userservice.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final Mapper mapper;

    public UserController(UserService userService, Mapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<Users> users = userService.getAllUsers();
        return new ResponseEntity<>(mapper.convertToDTOList(users), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Integer id) {
        Users user = userService.getUserById(id);
        return new ResponseEntity<>(mapper.convertToDto(user), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody Users users) {
        try {
            userService.createUser(users);
            return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create user: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        try {
            Users user = mapper.convertToEntity(userDTO);
            userService.updateUser(id, user);
            return new ResponseEntity<>("Updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update user: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
