import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-prac-15',
  templateUrl: './prac-15.component.html',
  styleUrls: ['./prac-15.component.css'],
})
export class Prac15Component implements OnInit {
  sports: any[] = [];

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.fetchSports();
  }

  fetchSports(): void {
    this.sportService.getSports().subscribe((data: any[]) => {
      this.sports = data;
    });
  }
}
