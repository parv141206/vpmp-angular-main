import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private apiUrl = 'http://localhost:3000/sports';

  constructor(private http: HttpClient) {}

  getSports(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((response) => response));
  }

  searchSports(term: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}?search=${term}`)

     .pipe(map((response) => response));
  }
}
