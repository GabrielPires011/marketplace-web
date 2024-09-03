import { Component, OnInit } from '@angular/core';
import { VendasService } from '../../service/vendas.service';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html',
  styleUrls: ['./listar-vendas.component.css']
})
export class ListarVendasComponent implements OnInit {


  displayedColumns: string[] = ['id', 'descricao', 'valor', 'status', 'acoes'];
  vendas = new MatTableDataSource<any>([]);

  constructor(private vendasService: VendasService, private router: Router) { }
  ngOnInit(): void {
    this.carregarVendas();
  }

  carregarVendas(): void {
    this.vendasService.listarVendas().subscribe(vendas => {
      this.vendas.data = vendas;
    });
  }

  criarVenda(): void {
    this.router.navigate(['/venda/novo']);
  }

  cancelarVenda(venda: any): void {
    this.vendasService.cancelarVenda(venda.id).subscribe(response => {
      this.vendas.data = this.vendas.data.filter(v => v.id !== venda.id);
    });
  }

}

