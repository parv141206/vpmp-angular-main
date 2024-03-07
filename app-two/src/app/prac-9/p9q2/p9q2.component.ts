import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-p9q2',
  templateUrl: './p9q2.component.html',
  styleUrls: ['./p9q2.component.css'],
})
export class P9q2Component {
  onSubmit(form: NgForm): void {
    console.log(form.value);
    // Handle form submission here
  }
}
