import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanel } from './layout-panel';

describe('LayoutPanel', () => {
  let component: LayoutPanel;
  let fixture: ComponentFixture<LayoutPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
