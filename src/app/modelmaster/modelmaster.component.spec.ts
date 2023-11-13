import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelmasterComponent } from './modelmaster.component';

describe('ModelmasterComponent', () => {
  let component: ModelmasterComponent;
  let fixture: ComponentFixture<ModelmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
