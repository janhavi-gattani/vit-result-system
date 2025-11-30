package com.vit.resultsystem.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "students")
public class Student {
    @Id
    private String id;
    private String name;
    private String regNo;
    private String email;
    private String semester;
    private List<Subject> subjects;
}