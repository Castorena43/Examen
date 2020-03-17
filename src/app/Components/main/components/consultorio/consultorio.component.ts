import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.css']
})
export class ConsultorioComponent implements OnInit {

  consultorios: Consultorio[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;

  constructor(private service: ConsultorioService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'descripcion': new FormControl('', Validators.required)
    });

    this.service.getConsultorios('api/consultorio/all').subscribe( (data: any) => {
      this.consultorios = data;
      console.log(data);
    });

   }

  ngOnInit(): void {
  }

  create(){
    if ( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.create('api/consultorio/create',this.forma.value).subscribe( (data: any) => {
        console.log(data);
        this.alert('success', 'Agregado', 'Consultorio agregado correctamente');
      },
      error => this.alert('error', 'Something went wrong!', 'Oops...')
      );
    } else {
      this.forma.markAllAsTouched();
    }
  }

  guardarCambios(idx: number) {
    if ( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.update('api/consultorio/update/' + idx, this.forma.value).subscribe( (data: any) => {
        // console.log(data);
        this.alert('success', 'Actualizado', 'Consultorio actualizado correctamente');
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        // console.log(error);
      }
      );
    }
  }

  Editar( consultorio : Consultorio ) {
    this.editar = true;
    this.forma.controls['nombre'].setValue(consultorio.nombre);
    this.forma.controls['descripcion'].setValue(consultorio.descripcion);
    this.idx = consultorio.id
  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/consultorio/delete/' + id).subscribe( (data: any) => {
      // console.log(data);
      this.alert('success', 'Eliminado', 'Consultorio eliminado correctamente');
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

export interface Consultorio{
  nombre: string;
  descripcion: string;
  id: number;
}
