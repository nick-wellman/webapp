import { Component, OnInit } from '@angular/core';
import { NickWellmanService } from './services/nickwellman/nick-wellman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nickwellman-app';

  constructor(private nickWellmanService: NickWellmanService) {}

  ngOnInit(): void {
    this.loadSessionInfo();
  }

  private loadSessionInfo(): void {
    this.nickWellmanService.getSessionInfo().subscribe((sessionInfo) => {
      console.log('sessionInfo: ', sessionInfo);
      sessionStorage.setItem('username', sessionInfo.username);
      sessionStorage.setItem('roles', String(sessionInfo.roles));
    });
  }
}
