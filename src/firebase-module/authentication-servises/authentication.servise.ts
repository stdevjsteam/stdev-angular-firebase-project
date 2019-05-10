import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { user } from './interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthenticationServise {
    constructor(private ngAuth: AngularFireAuth) { }

    public signIn(email: string, password: string): Promise<user> {

        return new Promise((resolve, reject) => {

            this.ngAuth.auth.signInWithEmailAndPassword(email, password).then(

                (res) => {
                    let user: user = { token: '', uid: '' };
                    user.uid = res.user.uid;
                    res.user.getIdToken().then(token => { user.token = token; });
                    resolve(user);
                },
                (err) => { console.log('firebase-module/authentication-servise signIn', err); reject(); }

            );

        });

    }

    public signOut(): Promise<void> {

        return new Promise((resolve, reject) => {

            this.ngAuth.auth.signOut().then(

                () => { resolve(); },
                (err) => { console.log('firebase-module/authentication-servise signOut', err); reject(); }

            );

        });

    }
}
