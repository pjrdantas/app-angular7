import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { MenuComponent } from '../app/menu/menu/menu.component';
import { HomeComponent } from '../app/home/home/home.component';
import { UsuarioCadastroComponent } from '../app/usuario/cadastro/usuario-cadastro/usuario-cadastro.component';
import { UsuarioConsultaComponent } from '../app/usuario/consulta/usuario-consulta/usuario-consulta.component';
import { routing } from '../app/app-routing.module';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { TextMaskModule } from '../../node_modules/angular2-text-mask';
import { UsuarioService } from './services/usuario.service';
import { ConfigService } from './services/config.service';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    MenuComponent,
    UsuarioConsultaComponent,
    UsuarioCadastroComponent,
  ],
  imports: [
    A11yModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkTableModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    PortalModule,
    ReactiveFormsModule,
    ScrollingModule,
    TextMaskModule,
    CommonModule,
    NgxPaginationModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    routing,

  ],
  exports: [

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, ConfigService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
