import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  mobile: boolean
  ngOnInit() {


  }

  isSignedAsAdmin() {
    return this.authService.isSignedAsAdmin()
  }

  isSignedAsUser() {
    return this.authService.isSignedAsUser()
  }

  isSigned() {
    return this.authService.isSigned()
  }
}