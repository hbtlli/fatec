import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class Login {

  email: string = "";
  senha: string = "";

  login(){

    let dados = localStorage.getItem("cliente");

    if(dados){

      let cliente: Cliente = JSON.parse(dados);

      if(cliente.email == this.email && cliente.senha == this.senha){

        alert("Login realizado com sucesso");

      } else {

        alert("Email ou senha incorretos");

      }

    }

  }

}
