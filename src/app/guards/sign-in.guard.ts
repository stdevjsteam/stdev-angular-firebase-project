import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SignInGuard implements CanActivate {
    constructor(private Router: Router) { }

    canActivate() {
        if (localStorage.token) {
            this.Router.navigate(['home']);
            return false;
        }

        return true;
    }
}