import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeAddEditComponent } from './home-add-edit/home-add-edit.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-edit', component: HomeAddEditComponent },
    { path: 'add-edit/:id', component: HomeAddEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }