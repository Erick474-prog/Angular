import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  user = { username: 'gamer123', avatar: '👾' };
  newPost: string = '';
  posts: string[] = [
    'Acabo de ganar en League of Legends!',
    'Miren mi jugada en Valorant 🎥'
  ];
  friends: string[] = ['DarkSlayer', 'NoobMaster69', 'ProKiller', 'GGxLegend'];

  constructor(private router: Router) {}

  addPost() {
    if (this.newPost.trim() !== '') {
      this.posts.unshift(this.newPost);
      this.newPost = '';
    }
  }

  goToProfile() {
    this.router.navigate(['/perfil']);
  }
}
