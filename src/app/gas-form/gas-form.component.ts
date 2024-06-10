import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NickWellmanService } from '../services/nickwellman/nick-wellman.service';
import { DatePipe } from '@angular/common';
import { GasRequest } from '../models/GasRequest';

@Component({
  selector: 'app-gas-form',
  templateUrl: './gas-form.component.html',
  styleUrls: ['./gas-form.component.scss'],
  providers: [DatePipe]
})
export class GasFormComponent implements AfterViewInit {
  @ViewChild('date') dateRef: ElementRef;
  @ViewChild('odd') odometerRef: ElementRef;
  @ViewChild('vehicle') vehicleRef: ElementRef;
  @ViewChild('gas') gasRef: ElementRef;
  @ViewChild('cost') costRef: ElementRef;

  date: string;

  constructor(private nickWellmanService: NickWellmanService, private datePipe: DatePipe) {
    const myDate = new Date();
    this.date = this.datePipe.transform(myDate, 'yyyy-MM-dd');
  }

  ngAfterViewInit(): void {
    this.dateRef.nativeElement.value = this.date;
  }

  submit(): void {
    const date = this.dateRef.nativeElement.value;
    const odometer = this.odometerRef.nativeElement.value;
    const vehicle = this.vehicleRef.nativeElement.value;
    const gas = this.gasRef.nativeElement.value;
    const cost = this.costRef.nativeElement.value;

    const request: GasRequest = {
      date,
      odometer,
      vehicle,
      gas,
      cost
    };

    this.nickWellmanService.addGas(request).subscribe((response) => {
      window.location.assign('gas/stats');
    });
  }
}
