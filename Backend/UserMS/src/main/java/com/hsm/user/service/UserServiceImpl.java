package com.hsm.user.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.hsm.user.repository.UserRepository;
import com.hsm.user.dto.UserDTO;
import com.hsm.user.entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.hsm.user.exception.HmsException;

@Service("userService")

public class UserServiceImpl implements UserService {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public void registerUser(UserDTO userDTO) throws HmsException {
    Optional<User> user = userRepository.findByEmail(userDTO.getEmail());
    if (user.isPresent()) {
      throw new HmsException("User with this email already exists");
    }
    userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
    userRepository.save(userDTO.toEntity());
  }

  @Override
  public UserDTO loginUser(UserDTO userDTO) throws HmsException {
    User user = userRepository.findByEmail(userDTO.getEmail())
        .orElseThrow(() -> new HmsException("User not found"));
    if (!passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
      throw new HmsException("Invalid credentials");
    }
    user.setPassword(null);
    return user.toDTO();
  }

  @Override
  public UserDTO getUserById(Long userId) throws HmsException {
    return userRepository.findById(userId)
        .orElseThrow(() -> new HmsException("User not found with id: " + userId)).toDTO();
  }

  @Override
  public void updateUser(UserDTO userDTO) {
    // Implementation to be added
    throw new UnsupportedOperationException("Method not implemented yet");
  }
}
