package com.hsm.user.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import com.hsm.user.entity.User;

@Repository

public interface UserRepository extends CrudRepository<User, Long> {
  Optional<User> findByEmail(String email);
}
