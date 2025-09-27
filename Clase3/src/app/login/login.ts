import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, CommonModule] 
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Usuario y contraseña son requeridos';
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          this.errorMessage = '';
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Credenciales inválidas';
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al iniciar sesión. Intente nuevamente.';
      }
    });
  }
}
