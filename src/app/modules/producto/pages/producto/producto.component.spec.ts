import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosComponent } from './producto.component';

describe('ProductoComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosComponent]
    });
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
