import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'http://localhost:8000/api/listado';

  constructor(private http: HttpClient) { }

  ObtenerTodos() {
    return this.http.get<[Producto]>(this.url);
  }

  Guardar(producto: Producto, foto: File): Observable<any> {
    const formData = new FormData();
    formData.append('descripcion', producto.descripcion);

    // Convierte la cantidad a cadena antes de agregarla a FormData
    formData.append('cantidad', producto.cantidad.toString());

    formData.append('precio', producto.precio.toString());

    if (foto) {
      formData.append('foto', foto, foto.name);
    }

    return this.http.post(this.url, formData);
  }

}
