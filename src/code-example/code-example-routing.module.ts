import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeExampleComponent } from './code-example/code-example.component';
import { CodeExampleAddEditComponent } from './code-example-add-edit/code-example-add-edit.component';

const routes: Routes = [
    { path: '', component: CodeExampleComponent },
    { path: 'add-edit', component: CodeExampleAddEditComponent},
    { path: 'add-edit/:id', component: CodeExampleAddEditComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CodeExampleRoutingModule { }