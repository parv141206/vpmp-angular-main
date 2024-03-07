import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Prac5Component } from './prac-5/prac-5.component';
import { Prac4Component } from './prac-4/prac-4.component';
import { Prac6Component } from './prac-6/prac-6.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: Prac4Component,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-one';
}
