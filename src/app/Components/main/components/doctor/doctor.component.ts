import { EspecialidadService } from 'src/app/services/especialidad.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctores: Doctor[] = [];
  especialidades: any[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;

  constructor(private service: DoctorService, private service_esp: EspecialidadService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'apellido_paterno': new FormControl('', Validators.required),
      'apellido_materno': new FormControl('', Validators.required),
      'direccion': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'id_especialidad': new FormControl('', Validators.required)
    });

    this.service.getDoctores('api/doctor/all').subscribe( (data: any) => {
      this.doctores = data;
      console.log(data);
    });
    this.service_esp.getEspecialidades('api/especialidad/all').subscribe( (data: any) => {
      this.especialidades = data;
      console.log(data);
    });

   }

  ngOnInit(): void {}

  create() {
    if ( this.forma.valid ) {
      this.service.create('api/doctor/create', this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Agregado', 'Doctor agregado correctamente');
      },
      error => this.alert('error', 'Something went wrong!', 'Oops...')
      );
    } else {
      this.forma.markAllAsTouched();
    }
  }

  guardarCambios(idx: number) {
    if ( this.forma.valid ) {
      this.service.update('api/doctor/update/' + idx, this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Actualizado', 'Doctor actualizado correctamente');
        this.editar = false;
        this.forma.reset();
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        console.log(error);
      }
      );
    }
  }

  Editar( doctor: Doctor ) {
    this.editar = true;
    this.forma.controls['nombre'].setValue(doctor.nombre);
    this.forma.controls['apellido_paterno'].setValue(doctor.apellido_paterno);
    this.forma.controls['apellido_materno'].setValue(doctor.apellido_materno);
    this.forma.controls['direccion'].setValue(doctor.direccion);
    this.forma.controls['telefono'].setValue(doctor.telefono);
    this.forma.controls['id_especialidad'].setValue(doctor.id_especialidad);
    this.idx = doctor.id;
  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/doctor/delete/' + id).subscribe( (data: any) => {
      this.alert('success', 'Eliminado', 'Doctor eliminado correctamente');
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

export interface Doctor {
  id: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  id_especialidad: number;
  telefono: number;
  direccion: string;
  especialidad: string;
}
