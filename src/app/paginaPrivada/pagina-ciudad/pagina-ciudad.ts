import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CiudadServicio } from '../../Servicios/ciudad-servicio';

@Component({
  selector: 'app-pagina-ciudad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pagina-ciudad.html',
  styleUrl: './pagina-ciudad.css',
})
export class PaginaCiudad implements OnInit {
  private fb = inject(FormBuilder);
  private ciudadService = inject(CiudadServicio);

  ciudades: Ciudad[] = [];
  editando = false;
  ciudadIdSeleccionada: number | null = null;
  mensaje = '';
  error = '';
  cargando = false;

  ciudadForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit(): void {
    this.cargarCiudades();
  }

  cargarCiudades(): void {
    this.cargando = true;
    this.mensaje = '';
    this.error = '';

    this.ciudadService.listarCiudades().subscribe({
      next: (data) => {
        this.ciudades = data || [];
        this.cargando = false;
      },
      error: (err) => {
        if (err.status === 204) {
          this.ciudades = [];
        } else {
          this.error = 'Error al cargar las ciudades';
        }
        this.cargando = false;
      },
    });
  }

  guardarCiudad(): void {
    this.mensaje = '';
    this.error = '';

    if (this.ciudadForm.invalid) {
      this.ciudadForm.markAllAsTouched();
      return;
    }

    const ciudad: Ciudad = {
      nombre: this.ciudadForm.value.nombre?.trim() || '',
    };

    if (this.editando && this.ciudadIdSeleccionada !== null) {
      this.ciudadService
        .actualizarCiudad(this.ciudadIdSeleccionada, ciudad)
        .subscribe({
          next: () => {
            this.mensaje = 'Ciudad actualizada correctamente';
            this.resetFormulario();
            this.cargarCiudades();
          },
          error: (err) => {
            this.error = err?.error || 'No se pudo actualizar la ciudad';
          },
        });
    } else {
      this.ciudadService.guardarCiudad(ciudad).subscribe({
        next: () => {
          this.mensaje = 'Ciudad guardada correctamente';
          this.resetFormulario();
          this.cargarCiudades();
        },
        error: (err) => {
          this.error = err?.error || 'No se pudo guardar la ciudad';
        },
      });
    }
  }

  editarCiudad(ciudad: Ciudad): void {
    this.editando = true;
    this.ciudadIdSeleccionada = ciudad.id ?? null;

    this.ciudadForm.patchValue({
      nombre: ciudad.nombre,
    });

    this.mensaje = '';
    this.error = '';
  }

  eliminarCiudad(ciudad: Ciudad): void {
    if (!ciudad.id) return;

    const confirmar = confirm(`¿Desea eliminar la ciudad "${ciudad.nombre}"?`);
    if (!confirmar) return;

    this.mensaje = '';
    this.error = '';

    this.ciudadService.eliminarCiudad(ciudad.id).subscribe({
      next: () => {
        this.mensaje = 'Ciudad eliminada correctamente';
        this.cargarCiudades();

        if (this.ciudadIdSeleccionada === ciudad.id) {
          this.resetFormulario();
        }
      },
      error: (err) => {
        this.error = err?.error || 'No se pudo eliminar la ciudad';
      },
    });
  }

  cancelarEdicion(): void {
    this.resetFormulario();
  }

  resetFormulario(): void {
    this.ciudadForm.reset();
    this.editando = false;
    this.ciudadIdSeleccionada = null;
  }

  get nombre() {
    return this.ciudadForm.get('nombre');
  }
}
