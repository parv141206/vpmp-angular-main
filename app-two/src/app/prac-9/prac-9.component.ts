import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-prac-9',
  templateUrl: './prac-9.component.html',
  styleUrls: ['./prac-9.component.css'],
})
export class Prac9Component {
  subjects: string[] = [];

  addSubject(): void {
    this.subjects.push('');
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
