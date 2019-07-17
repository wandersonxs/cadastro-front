import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './shared/services/auth/auth-guard.service';

const routes: Routes = [
  {path: 'pessoas', loadChildren: './pages/pessoas/pessoas.module#PessoasModule', canActivate: [AuthGuard] },
  {path: 'login', loadChildren: './pages/security/security.module#SecurityPagesModule'},
  {path: '' , redirectTo: '/pessoas', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
