import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
                                          //generic
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor() { }
  ngOnInit(): void {

  }

  transferir() {
    console.log("Solicitada nova transferência");
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    console.log("Valor: ", this.valor);
    console.log("Destino: ", this.destino);

  }

}
