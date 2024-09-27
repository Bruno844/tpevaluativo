import { Component } from '@angular/core';  

@Component({  
  selector: 'app-productos',  
  templateUrl: './producto.component.html',  
  styleUrls: ['./producto.component.css']  
})  
export class ProductosComponent {  
  public productos = [  
    {  
      id: "1",  
      nombre: "Cubre Grip VLACK",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/grip-amarillo21-c5cbabb4a839c941e816696546931376-640-0.webp",  
      alt: "Producto A"  
    },  
    {  
      id: "2",  
      nombre: "Cubre Grip DRIAL",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/cubre-grip-drial-verde-tiendanube1-3a5f60b11d90124af816711311496246-640-0.webp",  
      alt: "Producto B"  
    },  
    {  
      id: "3",  
      nombre: "Grip TK Hi - Soft",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/grip-tk-21-5b861abf46f5f5474e16760485272761-640-0.webp",  
      alt: "Producto C"  
    },  
    {  
      id: "4",  
      nombre: "Bocha DRIAL Caja x 48u",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/caja-bocha-e97e57a56fe7c5942717272815600312-640-0.webp",  
      alt: "Producto D"  
    },  
    {  
      id: "5",  
      nombre: "Vincha VLACK 2.0",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/vincha-black-aqua1-6223a697e8e86a31f416699955839335-640-0.webp",  
      alt: "Producto E"  
    },  
    {  
      id: "6",  
      nombre: "Par de Redes Arco Hockey",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/redes_0003_blanco1-626bef104f8942bc4116717342248009-640-0.webp",  
      alt: "Producto F"  
    },  
    {  
      id: "7",  
      nombre: "Mascara Corner Corto DRIAL Standard",  
      imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/mascara-drial-amarilla-10241-1fc32662a23c3aac0916722480655322-640-0.webp",  
      alt: "Producto G"  
    },  
    {  
      id: "8",  
      nombre: "Producto H",  
      imagen: "https://example.com/producto8.jpg",  
      alt: "Producto H"  
    },  
    {  
      id: "9",  
      nombre: "Producto I",  
      imagen: "https://example.com/producto9.jpg",  
      alt: "Producto I"  
    }  
  ];  
}