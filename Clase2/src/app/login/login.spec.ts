import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Login } from './login';
import { AuthService } from '../auth.service';

// Mock para AuthService
class MockAuthService {
  login(username: string, password: string): boolean {
    return username === 'admin' && password === '1234';
  }
}

describe('Login Component', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login, RouterTestingModule],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login with correct credentials', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.username = 'admin';
    component.password = '1234';
    component.onLogin();

    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should not login with incorrect credentials', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.username = 'wrong';
    component.password = 'user';
    component.onLogin();

    expect(navigateSpy).not.toHaveBeenCalled();
  });
});