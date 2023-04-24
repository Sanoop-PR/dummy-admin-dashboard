import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPiChartComponent } from './dashboard-pi-chart.component';

describe('DashboardPiChartComponent', () => {
  let component: DashboardPiChartComponent;
  let fixture: ComponentFixture<DashboardPiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPiChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
