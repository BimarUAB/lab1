import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductoService } from '../services/producto';
import { CategoriaService } from '../services/categoria';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.html',
  imports: [FormsModule, CommonModule, RouterModule]
})
export class CrearProductoComponent implements OnInit {
  producto = { nombre: '', precio: 0, categoria_id: '' };
  categorias: any[] = [];
  mensaje = '';

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe({
      next: (data) => this.categorias = data,
      error: (err) => console.error('Error al cargar categorías', err)
    });
  }

  guardarProducto(): void {
  const payload = { ...this.producto, precio: Number(this.producto.precio) };

  this.productoService.crearProducto(payload).subscribe({
    next: () => {
      this.mensaje = '✅ Producto guardado con éxito';

      // ✅ Espera 2 segundos y luego regresa al Home
      setTimeout(() => {
        this.router.navigate(['/']).then(() => window.location.reload());
      }, 2000);
    },
    error: (err) => {
      console.error('Error al crear producto', err);
      this.mensaje = '❌ Ocurrió un error al guardar';
    }
  });
}
}