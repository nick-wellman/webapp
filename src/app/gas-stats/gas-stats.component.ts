import { Component, OnInit } from '@angular/core';
import { NickWellmanService } from '../services/nickwellman/nick-wellman.service';
import { GasResponse } from '../models/GasResponse';
import { ActivatedRoute } from '@angular/router';
import { GasSeries, GasVehicle } from '../models/GasMPG';

@Component({
  selector: 'app-gas-stats',
  templateUrl: './gas-stats.component.html',
  styleUrls: ['./gas-stats.component.scss']
})
export class GasStatsComponent implements OnInit {
  data: Array<GasResponse> = [];
  mpgData: Array<GasVehicle> = [];

  vehicle = false;

  constructor(private nickWellmanService: NickWellmanService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });

    this.nickWellmanService.getGas('Charger').subscribe((res) => {
      this.data = res.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        } else if (a.date < b.date) {
          return -1;
        } else {
          return 0;
        }
      });
      this.vehicle = true;
      this.calculateMPG();
    });
  }

  calculateMPG(): void {
    const series: Array<GasSeries> = [];
    for (let i = 1; i < this.data.length; i++) {
      const gal = Number(this.data[i].gas);
      const odo = Number(this.data[i].odometer) - Number(this.data[i - 1].odometer);
      const date = this.data[i].date;

      const mpg = odo / gal + '';

      series.push({ name: date, value: mpg });
    }
    this.mpgData.push({ name: 'Charger', series });
  }
}
