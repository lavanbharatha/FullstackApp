import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestsService } from '../services/requests.service';
import { HttpClientModule } from '@angular/common/http';
import { Student } from '../Model/Student.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, HttpClientModule,NgFor],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  studentForm: FormGroup;
  submitted = false;
  students: Student[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestsService
  ) {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(15), Validators.max(30)]],
      locality: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.requestService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        console.log('Students loaded:', this.students);
      },
      error: (error) => {
        console.error('Error loading students:', error);
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.studentForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.studentForm.invalid) {
      return;
    }

    const studentData: Student = this.studentForm.value;

    this.requestService.createStudent(studentData).subscribe({
      next: (response) => {
        console.log('Student created successfully', response);
        this.resetForm();
        this.loadStudents(); // Reload students after successful creation
      },
      error: (error) => {
        console.error('Error creating student:', error);
      }
    });
  }

  private resetForm() {
    this.studentForm.reset();
    this.submitted = false;
    Object.keys(this.studentForm.controls).forEach(key => {
      const control = this.studentForm.get(key);
      control?.setErrors(null);
    });
  }
}
