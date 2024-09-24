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
         nombre: "WIT 3D EXTREME ",
         imagen: "https://acdn.mitiendanube.com/stores/001/979/534/products/wit-3d-7-5dfef2b4615cc3615e17036889090040-640-0.webp",
         alt: "majo granatto"
       },
       {
         id: "",
         nombre: " CLASSIC RHINO",
         imagen: "https://acdn.mitiendanube.com/stores/001/979/534/products/classic-rhino-arena-1-329233dacc0083f12a17061147649411-640-0.webp",
         alt: ""
       },
       {
         id: "",
         nombre: "BOTINES RH01",
         imagen: "https://acdn.mitiendanube.com/stores/001/979/534/products/azul-1-3201b83d736825958d17061878568775-640-0.webp",
         alt: ""
       }
     ]
   }
}
