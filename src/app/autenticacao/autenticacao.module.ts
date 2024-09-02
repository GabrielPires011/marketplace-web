import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoRoutingModule } from './autenticacao.routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AutenticacaoModule { }

