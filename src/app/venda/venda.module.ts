import { NgModule } from '@angular/core';
import {ListarVendasComponent} from "./listar-vendas/listar-vendas.component";
import {CriarVendaComponent} from "./criar-venda/criar-venda.component";
import {VendaRoutingModule} from "./venda.routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from "@angular/material/stepper";
import {MatOption, MatSelect} from "@angular/material/select";

@NgModule({
  declarations: [
    ListarVendasComponent,
    CriarVendaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    VendaRoutingModule,
    MatSelect,
    MatOption

  ],
  exports: [
    ListarVendasComponent,
    CriarVendaComponent
  ]
})
export class VendaModule {}
