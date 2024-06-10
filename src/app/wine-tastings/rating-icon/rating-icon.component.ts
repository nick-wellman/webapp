import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-icon',
  templateUrl: './rating-icon.component.html',
  styleUrls: ['./rating-icon.component.scss']
})
export class RatingIconComponent {

  @Input() rating;
  @Input() size = 20;

  get percent() {
    return this.rating / 5;
  }

  constructor() { }

}
