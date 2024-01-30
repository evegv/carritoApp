import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { Router } from '@angular/router';
import { itemCarrito } from '../models/itemCarrito';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  productos: Producto[] | undefined;
  quantity: number;
  constructor(private productoService: ProductoService,
    private router: Router) {
    this.quantity = 1;
  }

  ngOnInit() {
    this.productoService.ObtenerTodos().subscribe((resp: any) => {
      this.productos = resp;
    })
  }

  addCarrito(producto: any) {
    let iCarrito: itemCarrito = {
      idProducto: producto.idProducto,
      descripcion: producto.descripcion,
      precio: producto.precio,
      cantidad: 1,
      estado: producto.estado,
      foto: producto.foto,
    };

    let carritoStorage = localStorage.getItem("carrito");
    let carrito: itemCarrito[] = carritoStorage ? JSON.parse(carritoStorage) : [];
    let index = carrito.findIndex(item => item.idProducto === iCarrito.idProducto);

    if (index === -1) {
      carrito.push(iCarrito);
    } else {
      carrito.push(iCarrito);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  Agregar(){
    this.router.navigate(['/compra']);
  }

  totalcarrito() {
    this.router.navigate(['/carrito']);
  }

}
