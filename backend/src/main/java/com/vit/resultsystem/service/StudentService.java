package com.vit.resultsystem.service;

import com.vit.resultsystem.model.Student;
import com.vit.resultsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;
    
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }
    
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    
    public Student getStudentByRegNo(String regNo) {
        return studentRepository.findByRegNo(regNo)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }
}