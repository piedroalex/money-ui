import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

import { Pessoa } from './../core/model';
import { environment } from 'environments/environment';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PessoaService {

  pessoasUrl: string;

  constructor(private http: AuthHttp) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`;
  }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if(filtro.nome){
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`, { search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const pessoas = responseJson.content;

        const resultado = {
          pessoas: pessoas,
          total: responseJson.totalElements
        };

        return resultado;
      })
  }

  excluir(codigo: number): Promise<void> {

    return this.http.delete(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {

    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo)
      .toPromise()
      .then(() => null);
  }

  listarTodas(): Promise<any> {

    return this.http.get(this.pessoasUrl)
      .toPromise()
      .then(response => response.json().content);
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {

    return this.http.post(this.pessoasUrl, JSON.stringify(pessoa))
      .toPromise()
      .then(response => response.json());
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {

    return this.http.put(`${this.pessoasUrl}/${pessoa.codigo}`,
        JSON.stringify(pessoa))
      .toPromise()
      .then(response => {
        const pessoaAlterada = response.json() as Pessoa;

        return pessoaAlterada;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const pessoa = response.json() as Pessoa;

        return pessoa;
      });
  }
}
