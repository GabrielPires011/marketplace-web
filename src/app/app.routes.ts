import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/autenticacao', pathMatch: 'full' },
  { path: 'autenticacao', loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
