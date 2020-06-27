import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators/map';
import { ConfigService } from './config.service';
import { Usuario } from './usuario';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuarioService {

  private baseUrlService = '';
  // tslint:disable-next-line: deprecation
  private headers: Headers;
  // tslint:disable-next-line: deprecation
  private options: RequestOptions;

  constructor(
    // tslint:disable-next-line: deprecation
    private http: Http,
    private configService: ConfigService) {
    this.baseUrlService = configService.getUrlService() + '/usuario/';
    // tslint:disable-next-line: deprecation
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    // tslint:disable-next-line: deprecation
    this.options = new RequestOptions({ headers: this.headers });
  }

  getUsuarios() {
    return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
  }

  addUsuario(usuario: Usuario) {
    return this.http.post(this.baseUrlService, JSON.stringify(usuario), this.options).pipe(map(res => res.json()));
  }

 deleteUsuario(id: number) {
    return this.http.delete(this.baseUrlService + id).pipe(map(res => res.json()));
  }

  getUsuario(id: number) {
    return this.http.get(this.baseUrlService + id).pipe(map(res => res.json()));
  }

  updateUsuario(usuario: Usuario) {
    return this.http.put(this.baseUrlService, JSON.stringify(usuario), this.options).pipe(map(res => res.json()));
  }
}
