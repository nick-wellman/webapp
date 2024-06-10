import { Component, NgZone, OnInit } from '@angular/core';
import { NickWellmanService } from '../services/nickwellman/nick-wellman.service';
import { Router } from '@angular/router';
import { WebappConstants } from '../configuration/WebappConstants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private nickWellmanService: NickWellmanService, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {}

  logout(event): void {
    event.preventDefault();
    this.nickWellmanService.logout().subscribe((value) => {
      localStorage.removeItem(WebappConstants.AUTH_TOKEN);
      this.zone.run(() => this.router.navigate(['/']));
    });
  }
}
