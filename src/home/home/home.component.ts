import { Component } from '@angular/core';
import { HomeDbServise } from '../servises/home-db.servise';
import { Router } from '@angular/router';
import { DataElement } from '../servises/interfaces/data-element.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeDbServise]
})
export class HomeComponent {
    private data: Array<DataElement>;
    private subscriber: Subscription;
    private pnameSearch = '';
    private stackSearch = '';
    
    constructor(private db: HomeDbServise, private Router: Router) { }

    ngOnInit(): void {
        this.subscriber = this.db.getData().subscribe(
            (data) => { this.data = data; }
        );
    }

    ngOnDestroy(): void {
        this.subscriber.unsubscribe();
    }

    private edit(id: string): void {
        this.Router.navigate(['../home/add-edit', id]); // ?????????????????????????????????????????????????????????
    }

    private delete(id: string): void {
        this.db.delete(id);
    }

}