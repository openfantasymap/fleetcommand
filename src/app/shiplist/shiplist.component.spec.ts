import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiplistComponent } from './shiplist.component';

describe('ShiplistComponent', () => {
  let component: ShiplistComponent;
  let fixture: ComponentFixture<ShiplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
