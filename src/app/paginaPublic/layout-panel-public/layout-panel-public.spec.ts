import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanelPublic } from './layout-panel-public';

describe('LayoutPanelPublic', () => {
  let component: LayoutPanelPublic;
  let fixture: ComponentFixture<LayoutPanelPublic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPanelPublic],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanelPublic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
