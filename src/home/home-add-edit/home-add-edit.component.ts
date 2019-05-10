import { Component } from '@angular/core';
import { HomeDbServise } from '../servises/home-db.servise';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Subscription } from 'rxjs';

@Component({
    selector: 'home-add-edit',
    templateUrl: 'home-add-edit.component.html',
    styleUrls: ['home-add-edit.component.css'],
    providers: [HomeDbServise]
})
export class HomeAddEditComponent {

    private id: string | null = null;

    constructor(private db: HomeDbServise, private urlParam: ActivatedRoute) { }

    private form: FormGroup = new FormGroup({
        pname: new FormControl("", Validators.required),
        stack: new FormControl("", Validators.required),
        curl: new FormControl(""),
        lurl: new FormControl(""),
        createdby: new FormControl(""),
    });

    ngOnInit() {

        this.id = this.urlParam.snapshot.params['id'];

        if (this.id) {

            let subscribtion: Subscription = this.db.getElement(this.id).subscribe(
                (data) => {
                    this.form.setValue({
                        pname: data.pname,
                        lurl: data.lurl,
                        curl: data.curl,
                        createdby: data.createdby,
                        stack: data.stack.join(' '),
                    });
                    subscribtion.unsubscribe();
                }
            );

        }

    }

    private add() {
        this.db.add({
            pname: this.form.value.pname,
            stack: this.form.value.stack.split(' '),
            curl: this.form.value.curl,
            lurl: this.form.value.lurl,
            createdby: this.form.value.createdby,
        });
        this.form.reset();
    }

    private edit() {
        this.db.edit(this.id, {
            pname: this.form.value.pname,
            stack: this.form.value.stack.split(' '),
            curl: this.form.value.curl,
            lurl: this.form.value.lurl,
            createdby: this.form.value.createdby,
        });
        this.form.reset();
        this.id = null;
    }

}