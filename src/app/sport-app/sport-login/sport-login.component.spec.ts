import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportLoginComponent } from './sport-login.component';

describe('SportLoginComponent', () => {
  let component: SportLoginComponent;
  let fixture: ComponentFixture<SportLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
