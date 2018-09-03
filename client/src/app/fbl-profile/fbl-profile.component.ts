import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

import { patternValidator } from '../services/pattern-validator.service';

@Component({
  selector: 'fbl-profile',
  templateUrl: './fbl-profile.component.html',
  styleUrls: ['./fbl-profile.component.scss']
})
export class FblProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
  ) { }

  ngOnInit () {
    // TODO: Get account details from /api/user/account and pre-populate fields
    this.createForm();
  }
  
  private createForm () {
    const token = localStorage.getItem('access_token');
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      // Don't allow changing primary email since that is how we look up user's in DB
      email: new FormControl({ value: this.jwtHelper.decodeToken(token).user.email, disabled: true }),
      secondaryEmail: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      gender: new FormControl(''),
    });
  }

  cancel () {
    this.router.navigate(['/login']);
  }

}
