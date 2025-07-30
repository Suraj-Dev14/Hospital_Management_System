package com.hsm.user.dto;

import com.hsm.user.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserDTO {
  private Long id;
  @NotBlank(message = "Name cannot be blank")
  private String name;
  @NotBlank(message = "Email cannot be blank")
  @Email(message = "Email should be valid")
  private String email;
  @NotBlank(message = "Password cannot be blank")
  private String password;
  private Roles role;

  public User toEntity() {
    return new User(this.id, this.name, this.email, this.password, this.role);
  }
}
