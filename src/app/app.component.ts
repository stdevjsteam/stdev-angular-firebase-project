import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthenticationServise } from '../firebase-module/authentication-servises/authentication.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fireAuth: FirebaseAuthenticationServise, private Router: Router) { }

  private signOut(): void {
    this.fireAuth.signOut().then(() => { delete localStorage.token; this.Router.navigate(['']); })
  }
}
