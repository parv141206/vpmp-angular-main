import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-prac-4',
 
  templateUrl: './prac-4.component.html',
  styleUrl: './prac-4.component.css',
})
export class Prac4Component {
  displayTextFlag = false;
  toggleText = () => {
    this.displayTextFlag = !this.displayTextFlag;
  };
}
