import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-publicacion',
  styleUrls: ['./detalle-publicacion.css'],
  templateUrl: './detalle-publicacion.html'

})
export class DetallePublicacion {
  post = {
    author: 'Carlos',
    content: 'Este es un post detallado',
    likes: 10,
    comments: ['Buen post!', 'Me gusta mucho']
  };

  newComment = '';

  addComment() {
    if (this.newComment.trim() !== '') {
      this.post.comments.push(this.newComment);
      this.newComment = '';
    }
  }

  likePost() {
    this.post.likes++;
  }
}
