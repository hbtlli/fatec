import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html'
})
export class Cadastro {

  cliente: Cliente = new Cliente();

  salvar(){

    localStorage.setItem(
      "cliente",
      JSON.stringify(this.cliente)
    );

    alert("Cliente cadastrado com sucesso!");
  }

}
