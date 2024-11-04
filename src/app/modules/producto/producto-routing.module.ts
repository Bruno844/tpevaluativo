import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { ProductosComponent } from './pages/producto/producto.component';
import { EntrenamientoComponent } from './pages/entrenamiento/entrenamiento.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { PalosComponent } from './pages/palos/palos.component';
import { SobrenosotrosComponent } from '../inicio/components/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from '../inicio/components/contacto/contacto.component';


const routes: Routes = [
  {
    path:"producto",component:ProductosComponent
  },
  {
    path:"entrenamiento",component:EntrenamientoComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  },
  {
    path:"palos",component:PalosComponent
  },
  {
    path:"sobrenosotros",component:SobrenosotrosComponent
  },
  { path: 'general', component: ProductosComponent },
  {
    path:"contacto",component:ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
