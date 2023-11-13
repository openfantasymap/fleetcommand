import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelslistComponent } from './modelslist.component';

describe('ModelslistComponent', () => {
  let component: ModelslistComponent;
  let fixture: ComponentFixture<ModelslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
