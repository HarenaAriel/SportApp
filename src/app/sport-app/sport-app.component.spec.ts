import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportAppComponent } from './sport-app.component';

describe('SportAppComponent', () => {
  let component: SportAppComponent;
  let fixture: ComponentFixture<SportAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
