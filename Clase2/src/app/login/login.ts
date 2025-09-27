import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('❌ Usuario o contraseña inválidos');
    }
  }
}