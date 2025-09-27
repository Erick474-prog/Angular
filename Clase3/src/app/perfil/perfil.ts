import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {
  user = {
    name: 'Carlos Pérez',
    email: 'carlos@example.com',
    posts: 5,
    likes: 12
  };
}
