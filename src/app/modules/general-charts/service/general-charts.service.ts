import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Models
import { GetPedimentsOfYear } from '../models/getPedimentsOfYear.interface';

const APIendpoint = environment.APIendpoint;
@Injectable()
export class GeneralChartsService {

  constructor(private http$: HttpClient) { }

  /**
   * totalPedimentos
   */
  public async totalPedimentos() {
    // const response = await this.http$.get<{Total: string}[]>(`${APIendpoint}pedimentos`).toPromise();
    const rep = [{"Total":"293"}];
    return rep;
  }

  /**
   * getPedimentosByMonth
   */
  public async getPedimentosByMonth(month: number) {
    // const response = await this.http$.get(`${APIendpoint}pedimentos/${month}`).toPromise();
    const response = '';
    return response;
  }

  /**
   * getPedimentosOfYear
   */
  public async getPedimentosOfYear() {
    // const response = await this.http$.get<GetPedimentsOfYear[]>(`${APIendpoint}pedimentos/Mes`).toPromise();
    const rep = [{Mes1:'32',Mes2:'114',Mes3:'67',Mes4:'80',Mes5:'0',Mes6:'0',Mes7:'0',Mes8:'0',Mes9:'0',Mes10:'0',Mes11:'0',Mes12:'0'}];
    return rep;
  }
}
