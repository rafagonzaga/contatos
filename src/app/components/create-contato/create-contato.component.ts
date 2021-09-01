import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter()
  novoContato:Contato = {
    nome:'',
    email:'',
    telefones:['190', '130', '192']
  }
  constructor() { }

  cancelar():void {
    console.log('Cliquei para fechar o modal.');
    this.onCancelarClick.emit();
  }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

}
