import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private url = 'http://localhost:8000/api/registrar';

  constructor(private http:HttpClient) { }

  realizarCompra(items: any[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { items };

    return this.http.post<any>(this.url, body, { headers });
  }
}
