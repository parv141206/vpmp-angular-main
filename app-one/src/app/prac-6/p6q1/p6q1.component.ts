import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
class Student {
  id: number = 0;
  name: string = '';
}
@Component({
  selector: 'app-p6q1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './p6q1.component.html',
  styleUrl: './p6q1.component.css',
})
export class P6q1Component {
  students: Student[] = [];
  newStudentName: string = '';
  maxStudents: number = 10;

  addStudent() {
    if (this.students.length >= this.maxStudents) {
      alert('Maximum limit Reached');
      return;
    }
    const newStudent = new Student();
    newStudent.id = this.students.length + 1;
    newStudent.name = this.newStudentName;
    this.students.push(newStudent);
    this.newStudentName = '';
  }

  removeStudent(studentId: number) {
    this.students = this.students.filter((student) => student.id !== studentId);
  }
}
