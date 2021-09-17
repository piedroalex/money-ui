import { RelatorioLancamentoComponent } from './relatorio-lancamento/relatorio-lancamento.component';
import { AuthGuard } from './../seguranca/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'lancamentos', component: RelatorioLancamentoComponent, canActivate: [ AuthGuard ], data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
