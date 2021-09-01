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
    telefones:['']
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

  addTelefone(): void {
    // console.log('Valeeeeei-me Jeová!');
    this.novoContato.telefones.push('');
    // console.log(this.novoContato.telefones);
  }

  removeTelefone(pos:number):void{
    console.log(pos);
    this.novoContato.telefones.splice(pos, 1);
  }

}
