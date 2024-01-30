export class Producto {
  idProducto:number;
  descripcion: string;
  cantidad: number|0;
  precio: number;
 foto:string | Blob | any;


  constructor(idProducto:number,descripcion: string, cantidad: number,precio: number, foto:string | Blob | any) {
    this.idProducto = idProducto;
    this.descripcion =  descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    this.foto=foto;
  }
  }
