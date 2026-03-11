import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-reenviaSenha',
  templateUrl: './reenviaSenha.html'
})
export class ReenviaSenha {

  email: string = "";

  reenviar(){

    let dados = localStorage.getItem("cliente");

    if(dados){

      let cliente: Cliente = JSON.parse(dados);

      if(cliente.email == this.email){

        alert("Sua senha é: " + cliente.senha);

      } else {

        alert("Email não encontrado");

      }

    }

  }

}
