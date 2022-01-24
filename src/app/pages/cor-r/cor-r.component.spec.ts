import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorRComponent } from './cor-r.component';

describe('CorRComponent', () => {
  let component: CorRComponent;
  let fixture: ComponentFixture<CorRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
