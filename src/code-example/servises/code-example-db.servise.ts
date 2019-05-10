import { Injectable } from '@angular/core';
import { FirebaseDatabaseServise } from '../../firebase-module/database-servises/database.servise';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataElement } from './intefaces/data-element.interface';
import { DataElementWithoutId } from './intefaces/data-element.interface';

@Injectable()
export class CodeExampleDbServise {

    private collection: string = environment.codeExampleComponent;

    constructor(private fbdbServise: FirebaseDatabaseServise) { }

    public getData(): Observable<Array<DataElement>> {

        return this.fbdbServise.getData(this.collection).pipe(
            map((data) => {

                return data.map((element) => {

                    return {
                        data: element.payload.doc.data(),
                        id: element.payload.doc.id,
                    }

                });

            })
        );

    }

    public getElement(id: string): Observable<DataElementWithoutId> {
        return this.fbdbServise.getElement(id, this.collection);
    }

    public add(obj: any): void {
        this.fbdbServise.add(this.collection, obj);
    }

    public edit(id: string, obj: any): void {
        this.fbdbServise.edit(id, this.collection, obj);
    }

    public delete(id: string): void {
        this.fbdbServise.delete(id, this.collection);
    }

}
