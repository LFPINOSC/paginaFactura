import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piepagina } from './piepagina';

describe('Piepagina', () => {
  let component: Piepagina;
  let fixture: ComponentFixture<Piepagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piepagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Piepagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
