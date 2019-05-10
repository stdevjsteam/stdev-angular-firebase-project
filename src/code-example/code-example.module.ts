import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CodeExampleRoutingModule } from './code-example-routing.module';
import { FirebaseModule } from '../firebase-module/firebase.module';
import { PipesModule } from './../pipes/pipes.module';

import { CodeExampleComponent } from './code-example/code-example.component';
import { CodeExampleAddEditComponent } from './code-example-add-edit/code-example-add-edit.component';

@NgModule({
    declarations: [
        CodeExampleComponent,
        CodeExampleAddEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        CodeExampleRoutingModule,
        FirebaseModule,
        PipesModule,
    ],
})
export default class CodeExampleModule{}