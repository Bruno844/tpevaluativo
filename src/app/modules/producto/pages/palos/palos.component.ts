
import { Component } from '@angular/core';  

@Component({  
  selector: 'app-palos',  
  templateUrl: './palos.component.html',  
  styleUrls: ['./palos.component.css']  
})  
export class PalosComponent {  
  public palos = [  
    {  
      id: "1",  
      nombre: "Palo VLACK 2024 Java Classic ",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/java-classic-series-verde-esmeralda-6-e0074344c97e46be8417074053347849-640-0.webp",  
      alt: "Palo VLACK 2024 Java Classic 37.5"  
    },  
    {  
      id: "2",  
      nombre: "Palo ADIDAS 2024 Estro .6 Ex ",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/adidas-estro-6-a1f4f5d12c7b49fcb217085354979037-640-0.webp",  
      alt: "Palo ADIDAS 2024 Estro .6 Ex 37.5"  
    },  
    {  
      id: "3",  
      nombre: "Palo OSAKA 2024 Pro Tour 100 ",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/pro-tour-100-show-bow-e2cca653650780e94f17074853645238-640-0.webp",  
      alt: "Palo OSAKA 2024 Pro Tour 100 2.0 Show Bow Iconic Black"  
    }  
  ];  
}