import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  pessoas = [
    { nome: 'Pedro', cidade: 'Teresina', estado: 'PI', ativo: true },
    { nome: 'Renata', cidade: 'Caxias', estado: 'MA', ativo: false },
    { nome: 'Clarissy', cidade: 'Elesbão Veloso', estado: 'PI', ativo: true },
    { nome: 'Alex', cidade: 'Teresina', estado: 'PI', ativo: true },
    { nome: 'Marcus', cidade: 'Fortaleza', estado: 'CE', ativo: false }
  ]
}
