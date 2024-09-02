import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AutenticacaoService} from "../service/autenticacao.service";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuarda implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.autenticacaoService.estaLogado()) {
      return true;
    } else {
      this.router.navigate(['/autenticacao']);
      return false;
    }
  }


}
