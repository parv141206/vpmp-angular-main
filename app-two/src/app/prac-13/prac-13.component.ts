import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-prac-13',
  templateUrl: './prac-13.component.html',
  styleUrls: ['./prac-13.component.css'],
})
export class Prac13Component implements OnInit {
  student: any;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.student = this.studentService.getStudentData();
  }
}
