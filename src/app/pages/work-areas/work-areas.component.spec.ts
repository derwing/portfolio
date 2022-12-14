import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreasComponent } from './work-areas.component';

describe('WorkAreasComponent', () => {
  let component: WorkAreasComponent;
  let fixture: ComponentFixture<WorkAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
