import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prac-8',
  templateUrl: './prac-8.component.html',
  styleUrls: ['./prac-8.component.css'],
})
export class Prac8Component {
  register(form: NgForm) {
    console.log(form.value);
    // Handle form submission here
  }
}
