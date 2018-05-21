
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblNavComponent } from './fbl-nav.component';

describe('FblNavComponent', () => {
  let component: FblNavComponent;
  let fixture: ComponentFixture<FblNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FblNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FblNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
