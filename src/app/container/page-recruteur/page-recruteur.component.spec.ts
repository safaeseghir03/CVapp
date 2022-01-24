import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecruteurComponent } from './page-recruteur.component';

describe('PageRecruteurComponent', () => {
  let component: PageRecruteurComponent;
  let fixture: ComponentFixture<PageRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
