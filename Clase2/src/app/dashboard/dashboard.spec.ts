import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard] // ✅ standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch tabs correctly', () => {
    component.setTab('gastos');
    expect(component.activeTab).toBe('gastos');

    component.setTab('balance');
    expect(component.activeTab).toBe('balance');
  });

  it('should calculate balance correctly', () => {
    const saldo = component.totalIngresos - component.totalGastos;
    expect(saldo).toBe(800000);
  });
});
