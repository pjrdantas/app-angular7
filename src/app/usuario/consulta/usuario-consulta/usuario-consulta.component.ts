import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../services/usuario';
import { Response } from '../../../services/response';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.scss']
})
export class UsuarioConsultaComponent implements OnInit {

  public titulo: string;
  public usuarios: Usuario[] = new Array();
  public usuario: Usuario = new Usuario();

  public paginaAtual: Number = 1 ;
  public contador: Number = 5;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {
  }

  ngOnInit() {

    this.titulo = 'Lista de Usuarios';
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
  }

  excluir(id: number, index: number): void {

    if (confirm('Deseja realmente excluir esse registro?')) {
      this.usuarioService.deleteUsuario(id).subscribe(response => {

        const res: Response = <Response>response;

        if (res.codigo === 1) {
          alert(res.mensagem);
          this.usuarios.splice(index, 1);
        } else {
          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });
    }
  }

  editar(id: number): void {
    this.router.navigate(['/usuario-cadastro', id]);
  }
}
