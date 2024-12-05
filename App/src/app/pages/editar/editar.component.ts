import { UsuarioService } from './../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormularioCadastroComponent } from './../formulario-cadastro/formulario-cadastro.component';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioLista } from '../../models/usuario';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { response } from 'express';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormularioCadastroComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  constructor(private UsuarioService:UsuarioService, private router: Router, private route: ActivatedRoute){}
  btnAcao = "Editar";
  btnTitulo = "Editar Usuario";
  usuario!: UsuarioLista;

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.UsuarioService.GetUsuarioId(id).subscribe(response => {
      this.usuario = response;
    });
  }

  editarUsuario(usuario: UsuarioLista){
    this.UsuarioService.EditarUsuario(usuario).subscribe(response =>{
      this.router.navigate(['/']);
    })
  }
}
