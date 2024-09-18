import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Entrenamiento } from 'src/app/models/entrenamiento';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: Entrenamiento[];
  
   constructor(){
     this.info = [
       {
         id: "",
         nombre: "",
         imagen: "",
         alt: ""
       },
       {
         id: "",
         nombre: "",
         imagen: "*",
         alt: ""
       },
       {
         id: "",
         nombre: "",
         imagen: "",
         alt: ""
       }
     ]
   }
}
