import { Component, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/LoginRequest';
import { NickWellmanService } from '../services/nickwellman/nick-wellman.service';
import { ToastMessageService } from '../services/toast-message/toast-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private nickWellmanService: NickWellmanService,
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastMessageService,
    private zone: NgZone
  ) {}

  login(): void {
    if (!this.form.valid) {
      return;
    }

    this.nickWellmanService.login(this.form.value as LoginRequest).subscribe(
      (value) => {
        this.zone.run(() => this.router.navigate(['/portal']));
      },
      (error) => {
        this.toast.showToastMessage('Username or password is incorrect.');
      }
    );
  }
}
