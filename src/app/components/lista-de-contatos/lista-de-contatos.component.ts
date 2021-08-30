import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[] = [
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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
