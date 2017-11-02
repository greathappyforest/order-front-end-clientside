import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSearchOutputComponent } from './restaurant-search-output.component';

describe('RestaurantSearchOutputComponent', () => {
  let component: RestaurantSearchOutputComponent;
  let fixture: ComponentFixture<RestaurantSearchOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSearchOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSearchOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
