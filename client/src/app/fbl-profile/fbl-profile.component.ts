import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';
import { patternValidator } from '../services/pattern-validator.service';

@Component({
  selector: 'fbl-profile',
  templateUrl: './fbl-profile.component.html',
  styleUrls: ['./fbl-profile.component.scss']
})
export class FblProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit () {
    this.createForm();
  }

  private createForm () {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      gender: new FormControl(''),
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
