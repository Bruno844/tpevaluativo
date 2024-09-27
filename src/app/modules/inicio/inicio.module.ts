/*
//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTAS - PÁGINAS
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobrenosotrosComponent } from './components/sobrenosotros/sobrenosotros.component';



@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent,
    ContactoComponent,
    SobrenosotrosComponent,
   
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule

  ]
})
export{
  ContactoComponent,
    SobrenosotrosComponent,
}
export class InicioModule { }*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTAS - PÁGINAS
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobrenosotrosComponent } from './components/sobrenosotros/sobrenosotros.component';

// COMPONENTES DE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent,
    ContactoComponent,
    SobrenosotrosComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [ // Exporta los componentes si es necesario
    ContactoComponent,
    SobrenosotrosComponent,
  ]
})
export class InicioModule { }
