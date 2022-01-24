import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRecComponent } from './nav-rec.component';

describe('NavRecComponent', () => {
  let component: NavRecComponent;
  let fixture: ComponentFixture<NavRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
