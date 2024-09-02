import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environment";
@Injectable({
  providedIn: 'root'
})
export class VendasService {
  private apiURL = environment.hostUrl + 'pagamento/';
  constructor(private http: HttpClient) { }
  registrarVenda(vendaData: any): Observable<any> {
    return this.http.post(`${this.apiURL}`, vendaData);
  }
  listarVendas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}listar`);
  }
  cancelarVenda(vendaId: string): Observable<any> {
    return this.http.delete(`${this.apiURL}cancelar/${vendaId}`);
  }
}

