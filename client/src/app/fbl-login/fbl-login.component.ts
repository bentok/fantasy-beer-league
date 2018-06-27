import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';
import { patternValidator } from '../services/pattern-validator.service';

@Component({
  selector: 'fbl-fbl-login',
  templateUrl: './fbl-login.component.html',
  styleUrls: ['./fbl-login.component.scss']
})
export class FblLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService) { }

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
    this.loginService.post(this.loginForm.value).subscribe(data => {
      console.log('response', data);
    });
  }

}
