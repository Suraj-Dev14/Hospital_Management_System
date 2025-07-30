package com.hsm.user.api;

import org.springframework.web.bind.annotation.RestController;

import com.hsm.user.dto.ResponseDTO;
import com.hsm.user.dto.UserDTO;
import com.hsm.user.exception.HmsException;
import com.hsm.user.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/users")
@Validated
@CrossOrigin

public class UserAPI {
  @Autowired
  private UserService userService;

  @PostMapping("/register")
  public ResponseEntity<ResponseDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws HmsException {
    userService.registerUser(userDTO);
    return new ResponseEntity<>(
        new ResponseDTO("User registered successfully"), HttpStatus.CREATED);
  }
  
  @PostMapping("/login")
  public ResponseEntity<UserDTO> loginUser(@RequestBody UserDTO userDTO) throws HmsException {
    return new ResponseEntity<>(userService.loginUser(userDTO), HttpStatus.OK);
  }
  
}
