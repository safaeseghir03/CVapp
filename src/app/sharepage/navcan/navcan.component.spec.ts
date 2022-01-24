import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcanComponent } from './navcan.component';

describe('NavcanComponent', () => {
  let component: NavcanComponent;
  let fixture: ComponentFixture<NavcanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
