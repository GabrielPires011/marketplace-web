import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-venda',
  templateUrl: './criar-venda.component.html',
  styleUrls: ['./criar-venda.component.css']
})
export class CriarVendaComponent implements OnInit {
  vendaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vendaForm = this.fb.group({
      nomeCliente: ['', Validators.required],
      numeroCartao: ['', Validators.required],
      validadeCartao: ['', Validators.required],
      cvv: ['', Validators.required],
      valorVenda: ['', Validators.required],
      descricao: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.vendaForm.valid) {
      const formData = this.vendaForm.value;
      console.log(formData);
    }
  }
}
