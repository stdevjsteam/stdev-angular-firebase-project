import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseAuthenticationServise } from '../../firebase-module/authentication-servises/authentication.servise';
import { Router } from "@angular/router";
@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['sign-in.component.css'],
})
export class SignInComponent {
    constructor(private fireAuth: FirebaseAuthenticationServise, private Router: Router) { }

    private form: FormGroup = new FormGroup({
        email: new FormControl('admin@mail.com', Validators.required),
        password: new FormControl('123456789', Validators.required),
    })

    private signIn(): void {
        this.fireAuth.signIn(this.form.value.email, this.form.value.password).then(
            (user)=>{
                localStorage.token = user.token;
                this.Router.navigate(['home']);
            }
        );
    }
}