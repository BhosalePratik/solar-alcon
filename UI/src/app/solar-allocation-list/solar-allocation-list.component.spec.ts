import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarAllocationListComponent } from './solar-allocation-list.component';

describe('SolarAllocationListComponent', () => {
  let component: SolarAllocationListComponent;
  let fixture: ComponentFixture<SolarAllocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarAllocationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarAllocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
