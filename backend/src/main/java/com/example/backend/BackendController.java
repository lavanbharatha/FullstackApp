
package com.example.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:4200")


public class BackendController {

    private StudentEntity studentEntity;
    @Autowired
    private Students students;
   

    @GetMapping("/getStudents")
    public List<StudentEntity> getStudents() {
        return students.findAll();
    }
    @PostMapping("/addStudent")
    public void addStudents(@RequestBody Student student) {
        studentEntity = new StudentEntity();
        studentEntity.setName(student.getName());
        studentEntity.setAge(student.getAge());
        studentEntity.setLocality(student.getLocality());
        studentEntity.setEmail(student.getEmail());
        studentEntity.setPhone(student.getPhone());
        students.save(studentEntity);
    }
    
    
}
