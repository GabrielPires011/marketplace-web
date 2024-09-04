import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutenticacaoDto} from "../../model/autenticacao-dto";
import {Router} from "@angular/router";
import {AutenticacaoService} from "../../service/autenticacao.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  mensagemErro: string | undefined;
  mensagemSucesso: string | undefined;
  loginInvalido = false;
  loginEfetuadoComSucesso = false;

  constructor(private fb: FormBuilder, private autenticacaoService: AutenticacaoService, private router: Router,) {
    this.formGroup = this.fb.group({
      email: [undefined, [Validators.required, Validators.email]],
      senha: [undefined, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  realizarLogin() {
    const autenticacaoDto: AutenticacaoDto = this.formGroup.value;
    this.autenticacaoService.autenticacao(autenticacaoDto).subscribe(
      () => {
        this.loginInvalido = false;
        this.loginEfetuadoComSucesso = true;
        this.mensagemSucesso = 'Login bem-sucedido';
        setTimeout(() => {
          this.router.navigate(['/venda']);
        }, 100)
      },
      (error) => {
        if (error.error == null) {
          this.mensagemErro = "Credenciais inválidas"
        } else {
          this.mensagemErro = error.error
        }
        this.loginInvalido = true;
        this.loginEfetuadoComSucesso = false;
      });
  }

}
