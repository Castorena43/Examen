import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { EspecialidadService } from 'src/app/services/especialidad.service';


@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

  especialidades: Especialidad[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;

  constructor(private service: EspecialidadService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'descripcion': new FormControl('', Validators.required)
    });

    this.service.getEspecialidades('api/especialidad/all').subscribe( (data: any) => {
      this.especialidades = data;
      console.log(data);
    });

   }

  ngOnInit(): void {
  }

  create(){
    if ( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.create('api/especialidad/create',this.forma.value).subscribe( (data: any) => {
        console.log(data);
        this.alert('success', 'Agregado', 'Especialidad agregado correctamente');
      },
      error => this.alert('error', 'Something went wrong!', 'Oops...')
      );
    } else {
      this.forma.markAllAsTouched();
    }
  }

  guardarCambios(idx: number) {
    if( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.update('api/especialidad/update/' + idx, this.forma.value).subscribe( (data: any) => {
        // console.log(data);
        this.alert('success', 'Actualizado', 'Especialidad actualizado correctamente');
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        // console.log(error);
      }
      );
    } else {
      this.forma.markAllAsTouched();
    }
  }

  Editar( consultorio : Especialidad ) {
    this.editar = true;
    this.forma.controls['nombre'].setValue(consultorio.nombre);
    this.forma.controls['descripcion'].setValue(consultorio.descripcion);
    this.idx = consultorio.id
  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/especialidad/delete/' + id).subscribe( (data: any) => {
      // console.log(data);
      this.alert('success', 'Eliminado', 'Especialidad eliminado correctamente');
    },
    error => this.alert('error', 'Something went wrong!', 'Oops...')
    );
  }

  alert(icon: any, title: any, msg: any): void {
    Swal.fire({
      icon: icon,
      title: title,
      text: msg
    });
  }

}

export interface Especialidad{
  id: number;
  nombre: string;
  descripcion: string;
}
