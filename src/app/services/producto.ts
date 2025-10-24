import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private api = 'http://127.0.0.1:8000/api/productos';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  listaProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  // Crear un nuevo producto
  crearProducto(producto: any): Observable<any> {
    return this.http.post<any>(this.api, producto);
  }
}