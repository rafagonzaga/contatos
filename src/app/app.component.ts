import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos';
  mostrandoModal = false; // Setar para false

  mostrarModal(){
    console.log('Eu te escutei, meu filho!');
    this.mostrandoModal = true;
  }

  esconderModal(){
    console.log('Eu te escutei também, meu filho!');
    this.mostrandoModal = false;
  }

}
