import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WineDisplay } from '@models/WineDisplay';
import { WineRatingResponse } from '@models/WineRatingResponse';

@Component({
  selector: 'app-wine-card-xlist',
  templateUrl: './wine-card-xlist.component.html',
  styleUrls: ['./wine-card-xlist.component.scss'],
})
export class WineCardXListComponent implements OnInit {
  @Input() wine;
  averageRating = 0;

  yourRatings = 0;
  totalRatings = 0;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.wine.ratings.length) {
      const total = this.wine.ratings.reduce((total, rating) => { return total + parseInt(rating.rating) }, 0);
      this.averageRating = total / this.wine.ratings.length;
    }
  }

  viewNotes() {
    this.router.navigate(['wineTasting', 'winery', this.wine.wineryId, 'wine', this.wine.id])
  }

  getYourRatings(wine: WineDisplay): void {
    const wineId = wine.id;
    const user = sessionStorage.getItem('username');

    let count = 0;

    this.wine.ratings.forEach((value) => {
      if (value.wineId === wineId && value.user === user) {
        count++;
      }
    });

    this.yourRatings = count;
  }

  getTotalRatings(wine: WineDisplay): void {
    const wineId = wine.id;

    let count = 0;

    this.wine.ratings.forEach((value) => {
      if (value.wineId === wineId) {
        count++;
      }
    });

    this.totalRatings = count;
  }

}
