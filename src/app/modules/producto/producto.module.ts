import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { EntrenamientoComponent } from './pages/entrenamiento/entrenamiento.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { PalosComponent } from './pages/palos/palos.component';
import { SobrenosotrosComponent } from '../inicio/components/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from '../inicio/components/contacto/contacto.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    ProductoComponent,
    EntrenamientoComponent,
    IndumentariaComponent,
    PalosComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    CardComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    EntrenamientoComponent,
    IndumentariaComponent,
    PalosComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    CardComponent,
  ]
})
export class ProductoModule { }
