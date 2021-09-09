import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponde: any) {
    let msg: string;

    if(typeof errorResponde === 'string'){
      msg = errorResponde;
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro ', errorResponde);
    }

    this.toasty.error(msg);
  }
}
