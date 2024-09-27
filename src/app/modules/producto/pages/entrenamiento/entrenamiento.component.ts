import { Component } from '@angular/core';  

@Component({  
  selector: 'app-entrenamiento',  
  templateUrl: './entrenamiento.component.html',  
  styleUrls: ['./entrenamiento.component.css']  
})  
export class EntrenamientoComponent {  
  public entrenamientos = [  
    {  
      id: "1",  
      nombre: "Pizarra DT MALIK",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/pizarra-malik-con-imanes2-agua1-64ce0fa8c0554aee6f16783676472653-640-0.webp",  
      alt: "Entrenamiento de Hockey A"  
    },  
    {  
      id: "2",  
      nombre: "Escalera de Coordinacion",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/escalera1-bc317430328e42c4a616903085099409-640-0.webp",  
      alt: "Entrenamiento de Hockey B"  
    },  
    {  
      id: "3",  
      nombre: "Pecheras TODOHOCKEY",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/pechera-th_0006_capa-01-43d9ceda4423572dae16717331826573-640-0.webp",  
      alt: "Entrenamiento de Hockey C"  
    }  
  ];  
}