import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { P6q1Component } from './p6q1/p6q1.component';
import { P6q2Component } from './p6q2/p6q2.component';

class Student {
  id: number = 0;
  num: number = 0;
}

@Component({
  selector: 'app-prac-6',
  standalone: true,
  imports: [CommonModule, FormsModule, P6q2Component],
  templateUrl: './prac-6.component.html',
  styleUrl: './prac-6.component.css',
})
export class Prac6Component {
  students: Student[] = [];
  newStudentNum: number = 0;

  addStudent() {
    const newStudent = new Student();
    newStudent.id = this.students.length + 1;
    newStudent.num = this.newStudentNum;
    this.students.push(newStudent);
    this.newStudentNum = 0;
  }

  removeStudent(studentId: number) {
    this.students = this.students.filter((student) => student.id !== studentId);
  }
}
