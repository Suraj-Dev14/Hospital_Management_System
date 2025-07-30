package com.hsm.user.service;

import com.hsm.user.dto.UserDTO;
import com.hsm.user.exception.HmsException;

public interface UserService {
  public void registerUser(UserDTO userDTO) throws HmsException;
  public UserDTO loginUser(UserDTO userDTO) throws HmsException;
  public UserDTO getUserById(Long id) throws HmsException;
  public void updateUser(UserDTO userDTO);
}
