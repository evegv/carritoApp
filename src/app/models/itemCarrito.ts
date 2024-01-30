export class itemCarrito {
  idProducto: number;
  descripcion: string;
  precio: number;
  cantidad: number;
  estado: number;
  foto: any;

  constructor() {
    this.idProducto = 0; // Puedes ajustar el valor predeterminado según tus necesidades
    this.descripcion = '';
    this.precio = 0;
    this.cantidad = 0;
    this.estado = 0;
    this.foto = null; // Puedes ajustar el valor predeterminado según tus necesidades
  }
}
