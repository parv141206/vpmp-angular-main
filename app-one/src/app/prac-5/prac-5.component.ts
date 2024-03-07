import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Q1Component } from './q-1/q-1.component';

@Component({
  selector: 'app-prac-5',
  standalone: true,
  imports: [CommonModule, Q1Component],
  templateUrl: './prac-5.component.html',
  styleUrl: './prac-5.component.css',
})
export class Prac5Component {
  students = [
    { name: 'Student 1', percentage: 98 },
    { name: 'Student 2', percentage: 85 },
    { name: 'Student 3', percentage: 78 },
  ];

  calculateGrade(percentage: number): string {
    if (percentage >= 90) return 'A';
    else if (percentage >= 80) return 'B';
    else if (percentage >= 70) return 'C';
    else if (percentage >= 60) return 'D';
    else return 'F';
  }
}
