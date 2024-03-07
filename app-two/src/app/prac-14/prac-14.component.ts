import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-prac-14',
  templateUrl: './prac-14.component.html',
  styleUrls: ['./prac-14.component.css'],
})
export class Prac14Component implements OnInit {
  sports: any[] = [];
  searchTerm: string = '';

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.fetchSports();
  }

  fetchSports(): void {
    this.sportService.getSports().subscribe((data: any[]) => {
      this.sports = data;
    });
  }

  searchSports(): void {
    this.sportService.searchSports(this.searchTerm).subscribe((data: any[]) => {
      this.sports = data;
    });
  }
}
