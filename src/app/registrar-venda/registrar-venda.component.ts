import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendasService } from '../service/vendas.service';
@Component({
  selector: 'app-registrar-venda',
  templateUrl: './registrar-venda.component.html'
})
export class RegistrarVendaComponent {
  vendaForm: FormGroup;
  status: string | null = null;
  constructor(private fb: FormBuilder, private vendasService: VendasService) {
    this.vendaForm = this.fb.group({
      descricao: ['', Validators.required],
      valor: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      cartaoCredito: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    });
  }
  onSubmit() {
    if (this.vendaForm.valid) {
      this.vendasService.registrarVenda(this.vendaForm.value).subscribe(response => {
        this.status = 'Sucesso';
      }, error => {
        this.status = 'Falha';
      });
    }
  }
}

