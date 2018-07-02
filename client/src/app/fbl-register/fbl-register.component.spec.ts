import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblRegisterComponent } from './fbl-register.component';

describe('FblRegisterComponent', () => {
  let component: FblRegisterComponent;
  let fixture: ComponentFixture<FblRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FblRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FblRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
