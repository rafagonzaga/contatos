import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = []

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private readonly chave:string = "CONTATOS";
  constructor() { }

  getContatos():Contato[] {
    // console.log(Math.random())

    // Tentar carregar os dados da localStorage
    let dados = window.localStorage.getItem(this.chave)
    // Verificar se havia dados na localStorage
    if(dados){
    // Se houver dados => Transformar dados em array; retornar os array de contatos
      let contatosCarregados:Contato[] = JSON.parse(dados)
      return contatosCarregados;

    } else {
    // Se não houver dados => Crio uma array vazia, Guardo uma array vazia nalocalStorage, retorna o array vazia
      window.localStorage.setItem(this.chave, "[]");
      return [];
    }
    // return BASE_DE_CONTATOS;
    
  }

  addContato(c:Contato): void {
    // Levantar os contatos do localStorage para um array de contatos
    let contatos = this.getContatos();
    
    // Adicionar o contato c ao final do array
    contatos.push(c);

    // Salvar o array de volta no localStorage
    window.localStorage.setItem(this.chave, JSON.stringify(contatos));

    // BASE_DE_CONTATOS.push(c);
  }

}
