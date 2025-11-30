package com.vit.resultsystem.controller;

import com.vit.resultsystem.model.Student;
import com.vit.resultsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
    
    @Autowired
    private StudentService studentService;
    
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }
    
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    
    @GetMapping("/{regNo}")
    public Student getStudentByRegNo(@PathVariable String regNo) {
        return studentService.getStudentByRegNo(regNo);
    }
}