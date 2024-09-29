package com.user.gateway.controller;


import com.user.gateway.util.JwtUtil;
import com.user.userservice.model.Users;
import com.user.userservice.model.dto.AuthRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthRequest authRequest) {
        // Call the UserService to authenticate the user
        String url = "http://localhost:8080/user/authenticate";
        ResponseEntity<Users> response = restTemplate.postForEntity(url, authRequest, Users.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            Users user = response.getBody();
            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
