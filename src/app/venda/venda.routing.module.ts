import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarVendasComponent} from "./listar-vendas/listar-vendas.component";
import {CriarVendaComponent} from "./criar-venda/criar-venda.component";

const routes: Routes = [
  { path: 'venda', component: ListarVendasComponent },
  { path: 'venda/novo', component: CriarVendaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule { }
