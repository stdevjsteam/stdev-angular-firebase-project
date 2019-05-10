import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { FirebaseModule } from '../firebase-module/firebase.module';
import { PipesModule } from '../pipes/pipes.module';

import { HomeComponent } from './home/home.component';
import { HomeAddEditComponent } from './home-add-edit/home-add-edit.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeAddEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HomeRoutingModule,
        FirebaseModule,
        PipesModule,
    ]
})
export default class HomeModule { }