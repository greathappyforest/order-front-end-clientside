import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSearchInputComponent } from './restaurant-search-input.component';

describe('RestaurantSearchInputComponent', () => {
  let component: RestaurantSearchInputComponent;
  let fixture: ComponentFixture<RestaurantSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
