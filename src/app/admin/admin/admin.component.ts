import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  signOut() {
    this.authService.signOut()
      .subscribe(() => {
        this.router.navigateByUrl('sign-in')
      })
  }
}
