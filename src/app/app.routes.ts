import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutenticacaoGuarda} from "./autenticacao/autenticacao-guarda";

const routes: Routes = [
  { path: '', redirectTo: '/autenticacao', pathMatch: 'full' },
  { path: 'autenticacao', loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule) },
  { path: 'venda', loadChildren: () => import('./venda/venda.module').then(m => m.VendaModule), canActivate: [AutenticacaoGuarda] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
