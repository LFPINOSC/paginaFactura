import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enlaceinteres } from './enlaceinteres';

describe('Enlaceinteres', () => {
  let component: Enlaceinteres;
  let fixture: ComponentFixture<Enlaceinteres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enlaceinteres],
    }).compileComponents();

    fixture = TestBed.createComponent(Enlaceinteres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
