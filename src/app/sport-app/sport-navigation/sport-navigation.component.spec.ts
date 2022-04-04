import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportNavigationComponent } from './sport-navigation.component';

describe('SportNavigationComponent', () => {
  let component: SportNavigationComponent;
  let fixture: ComponentFixture<SportNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
