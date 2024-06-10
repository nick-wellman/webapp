import { Component, OnInit } from '@angular/core';
import { NickWellmanService } from '../services/nickwellman/nick-wellman.service';
import { Expression } from '../models/Expression';

@Component({
  selector: 'app-pumping',
  templateUrl: './pumping.component.html',
  styleUrls: ['./pumping.component.scss']
})
export class PumpingComponent implements OnInit {
  private expressions: Expression[];

  constructor(private nickWellmanService: NickWellmanService) {}

  ngOnInit(): void {
    this.getExpressions();
  }

  getExpressions(): void {
    this.nickWellmanService.getExpressions();
  }
}
