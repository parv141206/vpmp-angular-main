import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getStudentData(): any {
    return {
      id: 1,
      name: 'ABC',
      age: 20,
      course: 'Diploma in CE',
    };
  }
}
