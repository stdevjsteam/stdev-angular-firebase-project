import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ChildRoutesGuard implements CanActivate {
    constructor(private Router: Router) { }

    canActivate() {
        if (localStorage.token) {
            return true;
        }
        
        this.Router.navigate(['/']);
        return false;
    }
}