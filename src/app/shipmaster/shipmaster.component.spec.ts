import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmasterComponent } from './shipmaster.component';

describe('ShipmasterComponent', () => {
  let component: ShipmasterComponent;
  let fixture: ComponentFixture<ShipmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
