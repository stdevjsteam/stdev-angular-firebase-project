import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CodeExampleDbServise } from '../servises/code-example-db.servise';
import { Subscription } from 'rxjs';
import { DataElement } from '../servises/intefaces/data-element.interface';

@Component({
    selector: 'code-example',
    templateUrl: 'code-example.component.html',
    styleUrls: ['code-example.component.css'],
    providers: [CodeExampleDbServise]
})
export class CodeExampleComponent{

    private data: Array<DataElement>;
    private subscriber: Subscription;
    private stackSearch = '';
    
    constructor(private db: CodeExampleDbServise, private Router: Router) { }

    ngOnInit(): void {
        this.subscriber = this.db.getData().subscribe(
            (data) => { this.data = data; }
        );
    }

    ngOnDestroy(): void {
        this.subscriber.unsubscribe();
    }

    private edit(id: string): void {
        this.Router.navigate(['../code-example/add-edit', id]); // ?????????????????????????????????????????????????????????
    }

    private delete(id: string): void {
        this.db.delete(id);
    }

}