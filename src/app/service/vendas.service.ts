import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environment";
import {CriarPagamentoDto} from "../model/criar-pagamento-dto";
import {CancelarPagamentoDto} from "../model/cancelar-pagamento-dto";
@Injectable({
  providedIn: 'root'
})
export class VendasService {
  private apiURL = environment.hostUrl + 'pagamento';
  constructor(private http: HttpClient) { }
  criarVenda(criarPagamentoDto: CriarPagamentoDto): Observable<any> {
    return this.http.post(`${this.apiURL}`, criarPagamentoDto);
  }
  listarVendas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/lista`);
  }
  cancelarVenda(cancelarPagamentoDto: CancelarPagamentoDto): Observable<any> {
    return this.http.put(`${this.apiURL}/cancela`, cancelarPagamentoDto);
  }
}

