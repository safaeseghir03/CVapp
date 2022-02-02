import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCandidatComponent } from './manage-candidat.component';

describe('ManageCandidatComponent', () => {
  let component: ManageCandidatComponent;
  let fixture: ComponentFixture<ManageCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
