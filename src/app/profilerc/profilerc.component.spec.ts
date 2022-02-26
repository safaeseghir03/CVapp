import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilercComponent } from './profilerc.component';

describe('ProfilercComponent', () => {
  let component: ProfilercComponent;
  let fixture: ComponentFixture<ProfilercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilercComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
