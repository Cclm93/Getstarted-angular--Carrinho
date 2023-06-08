import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAlertComponent } from './products-alert.component';

describe('ProductsAlertComponent', () => {
  let component: ProductsAlertComponent;
  let fixture: ComponentFixture<ProductsAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAlertComponent]
    });
    fixture = TestBed.createComponent(ProductsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
