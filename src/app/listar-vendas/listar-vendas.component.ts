import { Component, OnInit } from '@angular/core';
import { VendasService } from '../service/vendas.service';
@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html'
})
export class ListarVendasComponent implements OnInit {
  vendas: any[] = [];
  constructor(private vendasService: VendasService) { }
  ngOnInit(): void {
    this.vendasService.listarVendas().subscribe(vendas => {
      this.vendas = vendas;
    });
  }
  cancelarVenda(vendaId: string) {
    this.vendasService.cancelarVenda(vendaId).subscribe(response => {
      this.vendas = this.vendas.filter(venda => venda.id !== vendaId);
    });
  }
}

