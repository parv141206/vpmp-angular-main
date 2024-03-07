import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-prac-3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prac-3.component.html',
  styleUrl: './prac-3.component.css',
})
export class Prac3Component {
  textValue = '';
  displayTextFlag = false;

  displayText(): void {
    this.displayTextFlag = true;
  }
}
