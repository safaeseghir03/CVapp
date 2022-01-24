import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCandidatComponent } from './page-candidat.component';

describe('PageCandidatComponent', () => {
  let component: PageCandidatComponent;
  let fixture: ComponentFixture<PageCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
