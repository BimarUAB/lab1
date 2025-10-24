import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private api = 'http://127.0.0.1:8000/api/categorias';

  constructor(private http: HttpClient) {}

  listarCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
}