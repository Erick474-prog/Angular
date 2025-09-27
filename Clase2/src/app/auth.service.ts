// app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Lista de usuarios de prueba
  private readonly users = [
    { username: 'admin', password: '1234' },
    { username: 'erick', password: 'abcd' }
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_user');
  }

  getUser(): string | null {
    const user = localStorage.getItem('auth_user');
    return user ? JSON.parse(user).username : null;
  }
}