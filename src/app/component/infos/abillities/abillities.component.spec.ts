import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbillitiesComponent } from './abillities.component';

describe('AbillitiesComponent', () => {
  let component: AbillitiesComponent;
  let fixture: ComponentFixture<AbillitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbillitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbillitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
