package com.hsm.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.hsm.user.dto.Roles;

import com.hsm.user.dto.UserDTO;
import lombok.Data;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  @Column(unique = true)
  private String email;
  private String password;
  private Roles role;

  public UserDTO toDTO() {
    return new UserDTO(this.id, this.name, this.email, this.password, this.role);
  }
}
