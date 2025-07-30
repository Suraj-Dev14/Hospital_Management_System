package com.hsm.user.utility;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hsm.user.exception.HmsException;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;

@RestControllerAdvice
public class ExceptionControllerAdvice {
  @ExceptionHandler(Exception.class)
  public ResponseEntity<ErrorInfo> exceptionHandler(Exception e) {
    ErrorInfo error = new ErrorInfo(
        e.getMessage(),
        HttpStatus.INTERNAL_SERVER_ERROR.value(),
        LocalDateTime.now()
    );
    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(HmsException.class)
  public ResponseEntity<ErrorInfo> HmsExceptionHandler(HmsException e) {
    ErrorInfo error = new ErrorInfo(
        e.getMessage(),
        HttpStatus.INTERNAL_SERVER_ERROR.value(),
        LocalDateTime.now()
    );
    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
  public ResponseEntity<ErrorInfo> handleValidationExceptions(Exception e) {
    String errorMsg;
    if (e instanceof MethodArgumentNotValidException manvEx) {
      errorMsg = manvEx.getBindingResult().getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.joining(", "));
    } else {
     ConstraintViolationException cve = (ConstraintViolationException) e;
      errorMsg = cve.getConstraintViolations().stream()
          .map(ConstraintViolation::getMessage)
          .collect(Collectors.joining(", "));
    }
    ErrorInfo error = new ErrorInfo(
        errorMsg,
        HttpStatus.BAD_REQUEST.value(),
        LocalDateTime.now()
    );
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }
    
}
