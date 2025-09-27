import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  selectedTab: string = 'deposito';
  saldo: number = 0;
  montoDeposito: number = 0;
  montoRetiro: number = 0;

  constructor(private router: Router) {}

  // ✅ nuevas propiedades
  totalDepositos: number = 0;
  totalRetiros: number = 0;

  setTab(tab: string) {
    this.selectedTab = tab;
  }

  depositar() {
    if (this.montoDeposito > 0) {
      this.saldo += this.montoDeposito;
      this.totalDepositos += this.montoDeposito; // ✅ acumular depósitos
      this.montoDeposito = 0;
      this.setTab('balance');
    }
  }

  retirar() {
    if (this.montoRetiro > 0 && this.montoRetiro <= this.saldo) {
      this.saldo -= this.montoRetiro;
      this.totalRetiros += this.montoRetiro; // ✅ acumular retiros
      this.montoRetiro = 0;
      this.setTab('balance');
    } else {
      alert('Saldo insuficiente');
    }
  }
  logout(): void {
  localStorage.clear();
  sessionStorage.clear();
  this.router.navigate(['/login']);
}

}
