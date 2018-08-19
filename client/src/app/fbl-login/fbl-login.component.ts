import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { patternValidator } from '../services/pattern-validator.service';

@Component({
  selector: 'fbl-fbl-login',
  templateUrl: './fbl-login.component.html',
  styleUrls: ['../styles/form.scss']
})
export class FblLoginComponent implements OnInit {
  loginForm: FormGroup;
  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit () {
    this.createForm();
  }

  private createForm () {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    });
  }

  login () {
    this.authService.post(this.loginForm.value)
      .pipe(first())
      .subscribe(
        () => this.router.navigate(['dashboard']),
        () => this.error = 'Could not authenticate'
      );
  }

  newAccount () {
    this.router.navigate(['/register']);
  }

}
