import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblProfileComponent } from './fbl-profile.component';

describe('FblProfileComponent', () => {
  let component: FblProfileComponent;
  let fixture: ComponentFixture<FblProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FblProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FblProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
