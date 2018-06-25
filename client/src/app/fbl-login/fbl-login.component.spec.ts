import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblLoginComponent } from './fbl-login.component';

describe('FblLoginComponent', () => {
  let component: FblLoginComponent;
  let fixture: ComponentFixture<FblLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FblLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FblLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
