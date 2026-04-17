import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCiudad } from './pagina-ciudad';

describe('PaginaCiudad', () => {
  let component: PaginaCiudad;
  let fixture: ComponentFixture<PaginaCiudad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCiudad],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaCiudad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
