import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';


import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'fbl-nav',
  templateUrl: './fbl-nav.component.html',
  styleUrls: ['./fbl-nav.component.css']
})
export class FblNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private auth: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  logout () {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
