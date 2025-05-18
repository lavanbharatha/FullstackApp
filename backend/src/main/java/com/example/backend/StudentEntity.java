package com.example.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class StudentEntity {
@Id
@GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
private Long id;
private String name;
private String age;
private String locality;    
private String email;
private String phone;
public String getName() {
    return name;
}
public void setName(String name) {
    this.name = name;
}
public String getAge() {
    return age;
}
public void setAge(String age) {
    this.age = age;
}
public String getLocality() {
    return locality;
}
public void setLocality(String locality) {
    this.locality = locality;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPhone() {
    return phone;
}
public void setPhone(String phone) {
    this.phone = phone;
}

}
