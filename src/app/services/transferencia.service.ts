import { Transferencia } from './model/tranferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private HttpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas() {
    return this.HttpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia){
    this.hidratar(transferencia);
    //this.listaTransferencia.push(transferencia);
    return this.HttpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
