import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRecruteurComponent } from './signup-recruteur.component';

describe('SignupRecruteurComponent', () => {
  let component: SignupRecruteurComponent;
  let fixture: ComponentFixture<SignupRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
