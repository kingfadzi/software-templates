package com.example.${{values.java_package_name}};

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreeterService {

  @GetMapping("/greet")
  public HelloReply sayHello(@RequestParam(value = "name", defaultValue = "World") String name) {
    return new HelloReply("Hello " + name);
  }

  public static class HelloReply {
    private final String message;

    public HelloReply(String message) {
      this.message = message;
    }

    public String getMessage() {
      return message;
    }
  }
}
