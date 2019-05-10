import { Injectable } from '@angular/core';
import { FirebaseDatabaseServise } from '../../firebase-module/database-servises/database.servise';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataElement } from './interfaces/data-element.interface'
import {DataElementWithoutId} from './interfaces/data-element.interface';

@Injectable()
export class HomeDbServise {

    private collection: string = environment.homeComponent;

    constructor(private dbServise: FirebaseDatabaseServise) { }

    public getData(): Observable<Array<DataElement>> {

        return this.dbServise.getData(this.collection).pipe(
            map((data) => {

                return data.map((dataElement) => {

                    return {
                        data: dataElement.payload.doc.data(),
                        id: dataElement.payload.doc.id
                    }

                });

            })
        );

    }

    public getElement(id: string): Observable<DataElementWithoutId> {
        return this.dbServise.getElement(id, this.collection);
    }

    public delete(id: string): void {
        this.dbServise.delete(id, this.collection);
    }

    public add(obj: any): void {
        this.dbServise.add(this.collection, obj);
    }

    public edit(id: string, obj: any): void {
        this.dbServise.edit(id, this.collection, obj);
    }
}
