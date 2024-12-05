import { UsuarioService } from './../../services/usuario.service';
import { Component } from '@angular/core';
import { FormularioCadastroComponent } from '../formulario-cadastro/formulario-cadastro.component';
import { UsuarioLista } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioCadastroComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {


  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar Usuario";
  constructor(private UsuarioService : UsuarioService, private router : Router){}

  criarUsuario(usuario: UsuarioLista){
    this.UsuarioService.CadastrarUsuario(usuario).subscribe(response => {
      this.router.navigate(['/'])
    })
  }

}
