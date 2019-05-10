import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseDatabaseServise {
    constructor(private ngFirestore: AngularFirestore) { }

    public add(collection: string, obj: any): Promise<any> {
        
        return this.ngFirestore.collection(collection).add(obj).then(

            (res) => { console.log(res); },
            (err) => { console.log('firebase-module/database-servises add', err); }

        );

    }

    public edit(id: string, collection: string, obj: any): Promise<any> {

        return this.ngFirestore.collection(collection).doc(id).update(obj).then(

            (res) => { console.log(res); },
            (err) => { console.log('firebase-module/database-servises edit', err); }

        );

    }

    public delete(id: string, collection: string): void {

        this.ngFirestore.collection(collection).doc(id).delete().then(

            (res) => { console.log(res); },
            (err) => { console.log('firebase-module/database-servises delete', err); }

        );

    }

    public getData(collection: string): Observable<any> {
        return this.ngFirestore.collection(collection).snapshotChanges();
    }

    public getElement(id: string, collection: string): Observable<any> {
        return this.ngFirestore.collection(collection).doc(id).valueChanges();
    }
}