import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;

  constructor(private service: PacienteService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'apellido_paterno': new FormControl('', Validators.required),
      'apellido_materno': new FormControl('', Validators.required),
      'nss': new FormControl('', Validators.required),
      'direccion': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
    });

    this.service.getPacientes('api/paciente/all').subscribe( (data: any) => {
      this.pacientes = data;
      console.log(data);
    });

   }

  ngOnInit(): void {}

  create(){
    if ( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.create('api/paciente/create',this.forma.value).subscribe( (data: any) => {
        console.log(data);
        this.alert('success', 'Agregado', 'Paciente agregado correctamente');
      },
      error => this.alert('error', 'Something went wrong!', 'Oops...')
      );
    } else {
      this.forma.markAllAsTouched();
    }
  }

  guardarCambios(idx: number) {
    console.log('guardarCambios');
    if( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.update('api/paciente/update/' + idx, this.forma.value).subscribe( (data: any) => {
        console.log(data);
        this.alert('success', 'Actualizado', 'Paciente actualizado correctamente');
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        console.log(error);
      }
      );
    }
  }

  Editar( paciente : Paciente ) {
    this.editar = true;
    this.forma.controls['nombre'].setValue(paciente.nombre);
    this.forma.controls['apellido_paterno'].setValue(paciente.apellido_paterno);
    this.forma.controls['apellido_materno'].setValue(paciente.apellido_materno);
    this.forma.controls['nss'].setValue(paciente.nss);
    this.forma.controls['direccion'].setValue(paciente.direccion);
    this.forma.controls['telefono'].setValue(paciente.telefono);
    // this.forma.controls['nombre'].setValue(paciente.nombre);
    this.idx = paciente.id
  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/paciente/delete/' + id).subscribe( (data: any) => {
      // console.log(data);
      this.alert('success', 'Eliminado', 'Paciente eliminado correctamente');
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

export interface Paciente {
  id: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  nss: number;
  telefono: number;
  direccion: string;
}
