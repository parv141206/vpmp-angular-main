import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
 selector: 'app-p8q2',
 templateUrl: './p8q2.component.html',
 styleUrls: ['./p8q2.component.css']
})
export class P8q2Component {
 submitFeedback(form: NgForm) {
    console.log(form.value);
 }
}
