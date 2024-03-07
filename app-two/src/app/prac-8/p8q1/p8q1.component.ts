import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-p8q1',
  templateUrl: './p8q1.component.html',
  styleUrls: ['./p8q1.component.css'],
})
export class P8q1Component {
  grade: string | null = null;

  calculateGrade(form: NgForm) {
    const subject1 = form.value.subject1;
    const subject2 = form.value.subject2;
    const subject3 = form.value.subject3;

    const averageMark = (subject1 + subject2 + subject3) / 3;

    if (averageMark > 50) {
      this.grade = 'Passed';
    } else {
      this.grade = null;
    }
  }
}
