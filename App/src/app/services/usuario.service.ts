import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { UsuarioLista } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  ApiUrl = environment.urlApi;

  constructor(private http: HttpClient) { }


  GetUsuarios(): Observable<UsuarioLista[]>{
    return this.http.get<UsuarioLista[]>(this.ApiUrl + "Listagem");
  }

  CadastrarUsuario(usuario: UsuarioLista) : Observable<UsuarioLista[]>{
    return this.http.post<UsuarioLista[]>(this.ApiUrl + "Cadastro", usuario);
  }

  ExcluirUsuario(id: number | undefined) : Observable<UsuarioLista[]>{
    return this.http.delete<UsuarioLista[]>(`${this.ApiUrl + "Deletar"}?Id=${id}`);

  }

  GetUsuarioId(Id: number):Observable<UsuarioLista>{
    return this.http.get<UsuarioLista>(`${this.ApiUrl + "ObterId"}?Id=${Id}`);
  }

  EditarUsuario(usuario: UsuarioLista):Observable<UsuarioLista[]>{
    return this.http.put<UsuarioLista[]>(this.ApiUrl + "Atualizar", usuario);
  }
}
