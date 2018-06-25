import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../services/pattern-validator.service';

@Component({
  selector: 'fbl-fbl-login',
  templateUrl: './fbl-login.component.html',
  styleUrls: ['./fbl-login.component.scss']
})
export class FblLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() { }

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
    console.log(this.loginForm.value);
  }

}
