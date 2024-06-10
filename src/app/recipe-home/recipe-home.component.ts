import { Component, OnInit } from '@angular/core';
import { NickWellmanService } from '../services/nickwellman/nick-wellman.service';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit {
  constructor(private nickWellmanService: NickWellmanService) {}

  ngOnInit(): void {}
}
