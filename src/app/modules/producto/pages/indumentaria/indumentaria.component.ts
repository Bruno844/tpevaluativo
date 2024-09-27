import { Component } from '@angular/core';  

@Component({  
  selector: 'app-indumentaria',  
  templateUrl: './indumentaria.component.html',  
  styleUrls: ['./indumentaria.component.css']  
})  
export class IndumentariaComponent {  
  public indumentaria = [  
    {  
      id: "1",  
      nombre: "Buzo Micropolar VLACK",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/sin-titulo-1_0001_pasua-coral1-cb2f5df4bb9c4efadf16721731308944-640-0.webp",  
      alt: "Camiseta de Hockey A"  
    },  
    {  
      id: "2",  
      nombre: "Short con calza REVES",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/a2215011105-011-122305ef7cd425fd9f16679328976449-640-0.webp",  
      alt: "Pantalón de Hockey B"  
    },  
    {  
      id: "3",  
      nombre: "Campera REVES Katla",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/21215601141_w_campera_katla_marfil_141-051-f33069a98bd448ea5616499492922163-640-01-914fc1827ff76d18df16667181910093-640-0.webp",  
      alt: "Chaqueta de Hockey C"  
    }  
  ];  
}