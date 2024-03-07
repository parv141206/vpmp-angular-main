import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prac-16',
  templateUrl: './prac-16.component.html',
  styleUrls: ['./prac-16.component.css'],
})
export class Prac16Component {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const url = 'http://localhost:3000/saveUserData'; // Replace with your Express server URL
    this.http
      .post(url, { username: this.username, password: this.password })
      .subscribe();
  }
}
