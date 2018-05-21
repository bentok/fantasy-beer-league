
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblDashboardComponent } from './fbl-dashboard.component';

describe('FblDashboardComponent', () => {
  let component: FblDashboardComponent;
  let fixture: ComponentFixture<FblDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FblDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FblDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
