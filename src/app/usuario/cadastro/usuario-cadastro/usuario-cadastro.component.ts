import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../services/usuario';
import { Response } from '../../../services/response';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})

export class UsuarioCadastroComponent implements OnInit {

  public titulo: string;
  public usuario: Usuario = new Usuario();
  public hide = true;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomeUsuario: new FormControl('', [Validators.required, Validators.min(10)]),
    loginUsuario: new FormControl('', [Validators.required, Validators.min(6)]),
    senhaUsuario: new FormControl('', [Validators.required, Validators.min(3)]),
    emailUsuario: new FormControl('', [Validators.required, Validators.email]),
    dtInicioUsuario: new FormControl(new Date(), Validators.required),
    ativoUsuario: new FormControl(1)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomeUsuario: '',
      loginUsuario: '',
      senhaUsuario: '',
      emailUsuario: '',
      dtInicioUsuario: new FormControl(new Date()),
      ativoUsuario: 0
    });
  }

  constructor(
    public usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(parametro => {
      if (parametro['id'] === undefined) {
        this.titulo = 'Adicionar Usuário';
        this.initializeFormGroup();
      } else {
        this.titulo = 'Editar Usuario';
        this.usuarioService.getUsuario(Number(parametro['id'])).subscribe(res => this.usuario = res);
      }
    });
  }

  salvar() {

    if (this.usuario.id === undefined) {
      this.usuarioService.addUsuario(this.usuario).subscribe(response => {
        const res: Response = <Response>response;
        if (res.codigo === 1) {
          alert(res.mensagem);
          this.usuario = new Usuario();
          this.router.navigate(['/usuario-consulta']);
        } else {
          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });

    } else {
      this.usuarioService.updateUsuario(this.usuario).subscribe(response => {
        const res: Response = <Response>response;
        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/usuario-consulta']);
        } else {
          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });
    }
  }
}
