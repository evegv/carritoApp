import { Component, OnInit } from '@angular/core';
import { itemCarrito } from '../models/itemCarrito';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { CarritoService } from '../services/carrito.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  listaItemsCarrito: itemCarrito[] = [];
  public total = 0;
  constructor(private router: Router, private service: ProductoService, private carritoService: CarritoService, private alertController: AlertController) { }
  ngOnInit() {
    this.MuestraCarrito();
  }
  MuestraCarrito() {
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito;
    this.TotalCarrito();
  }

  VaciarCarrito() {
    localStorage.clear();
    this.listaItemsCarrito = [];
    this.total = 0;
  }
  eliminarProductoCarrito(i: number) {
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    carrito.splice(i, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    this.MuestraCarrito();
  }
  TotalCarrito() {
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    let suma = 0;
    for (var i = 0; i < carrito.length; i++) {
      suma += carrito[i].precio * carrito[i].cantidad;
    }
    this.total = suma;
  }
  back() {
    this.router.navigate(['/catalogo']);
  }

  confirmarCompra() {
    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito = JSON.parse(carritoStorage);

    this.carritoService.realizarCompra(carrito).subscribe(
      (response) => {
        console.log(response);

        this.VaciarCarrito();

        this.alertController.create({
          header: 'Compra realizada',
          message: '¡Gracias por tu compra!',
          buttons: ['OK']
        }).then(alert => alert.present());

        this.router.navigate(['/catalogo']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
