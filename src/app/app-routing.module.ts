import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { ChildRoutesGuard } from './guards/child-routes.guard';
import { SignInGuard } from './guards/sign-in.guard';

const routes: Routes = [  
  { path: '', component: SignInComponent, canActivate: [SignInGuard] },
  { path: 'home', loadChildren: '../home/home.module', canActivate: [ChildRoutesGuard] },
  { path: 'code-example', loadChildren: '../code-example/code-example.module', canActivate: [ChildRoutesGuard] },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
