import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] =[
  {
    nome: "Rafael Gonzaga",
    email: "ralozaga@gmail.com",
    telefones:['2464-4642', '97661-7773', '98245-2536']
  },
  {
    nome: "Mariana Valente",
    email: "mariana@gmail.com",
    telefones:['6464-2587', '97634-8784']
  },
  {
    nome: "Pedro Valente",
    email: "ralozaga@gmail.com",
    telefones:['2464-4642']
  },
  {
    nome: "Antonio Luiz",
    email: "antonio@gmail.com",
    telefones:['7589-9865']
  },
  {
    nome: "Socorro Gonzaga",
    email: "socorro@gmail.com",
    telefones:['2464-1234']
  },
  {
    nome: "Valeria Valente",
    email: "valeria@gmail.com",
    telefones:['3521-7997']
  },
]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos():Contato[] {
    return BASE_DE_CONTATOS;
  }

  // Recebe um contato e o adiciona na base de contatos
  addContato(c:Contato): void {
    BASE_DE_CONTATOS.push(c)
  }
}
