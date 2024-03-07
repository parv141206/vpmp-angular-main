import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-q-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './q-1.component.html',
  styleUrl: './q-1.component.css',
})
export class Q1Component {
  options = ['Fire', 'Ice', 'Water'];
  selectedOption = '';

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }
}
