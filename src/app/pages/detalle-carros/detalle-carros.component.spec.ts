import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarrosComponent } from './detalle-carros.component';

describe('DetalleCarrosComponent', () => {
  let component: DetalleCarrosComponent;
  let fixture: ComponentFixture<DetalleCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
