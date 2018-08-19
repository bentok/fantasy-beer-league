import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';
import { patternValidator } from '../services/pattern-validator.service';

@Component({
  selector: 'fbl-fbl-register',
  templateUrl: './fbl-register.component.html',
  styleUrls: ['../styles/form.scss']
})
export class FblRegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit () {
    this.createForm();
  }

  private createForm () {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    });
  }

  register () {
    this.registerService.post(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  cancel () {
    this.router.navigate(['/login']);
  }

}
