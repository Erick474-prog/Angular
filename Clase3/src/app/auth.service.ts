import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;
  private users = [
    { username: 'gamer123', password: 'player123' }
  ];

  constructor() {}

  // Iniciar sesión
 login(username: string, password: string): Observable<any> {
  const user = this.users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    this.currentUser = { username: user.username };
    localStorage.setItem('user', JSON.stringify(this.currentUser));
    return of({ success: true, user: this.currentUser }); 
  } else {
    return of({ success: false });
  }
}


  // Cerrar sesión
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  // Verifica si hay un usuario autenticado
  isAuthenticated(): boolean {
    if (this.currentUser) {
      return true;
    }

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      return true;
    }

    return false;
  }

  // Obtener usuario actual
  getUser(): any {
    return this.currentUser;
  }
}
