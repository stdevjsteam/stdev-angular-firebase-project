import { Component } from '@angular/core';
import { CodeExampleDbServise } from '../servises/code-example-db.servise';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Subscription } from 'rxjs';

@Component({
    selector: 'code-example-add-edit',
    templateUrl: 'code-example-add-edit.component.html',
    styleUrls: ['code-example-add-edit.component.css'],
    providers: [CodeExampleDbServise]
})
export class CodeExampleAddEditComponent {

    private id: string | null = null;

    constructor(private db: CodeExampleDbServise, private urlParam: ActivatedRoute) { }

    private form: FormGroup = new FormGroup({
        purl: new FormControl("", Validators.required),
        stack: new FormControl("", Validators.required),
    });

    ngOnInit() {

        this.id = this.urlParam.snapshot.params['id'];

        if (this.id) {

            let subscribtion: Subscription = this.db.getElement(this.id).subscribe(
                (data) => { 
                    this.form.setValue({
                        purl: data.purl,
                        stack: data.stack.join(' '),
                    }); 
                    subscribtion.unsubscribe(); 
                }
            );

        }

    }

    private add(): void {
        this.db.add({
            purl: this.form.value.purl,
            stack: this.form.value.stack.split(' '),
        });
        this.form.reset();
    }

    private edit(): void {
        this.db.edit(this.id, {
            purl: this.form.value.purl,
            stack: this.form.value.stack.split(' '),
        });
        this.form.reset();
        this.id = null;
    }

}