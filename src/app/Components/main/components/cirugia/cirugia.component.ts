import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { QuirofanoService } from 'src/app/services/quirofano.service';
import { Paciente } from '../paciente/paciente.component';
import { Quirofano } from '../quirofano/quirofano.component';
import { DoctorService } from 'src/app/services/doctor.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Doctor } from '../doctor/doctor.component';
import { CirugiaService } from 'src/app/services/cirugia.service';

@Component({
  selector: 'app-cirugia',
  templateUrl: './cirugia.component.html',
  styleUrls: ['./cirugia.component.css']
})
export class CirugiaComponent implements OnInit {

  cirugias: Cirugia[] = [];
  doctores: Doctor[] = [];
  pacientes: Paciente[] = [];
  quirofanos: Quirofano[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;

  constructor(private service: CirugiaService, private service_doc: DoctorService,
              private service_pac: PacienteService, private service_quir: QuirofanoService) {
    this.forma = new FormGroup({
      'doctor': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'paciente': new FormControl('', Validators.required),
      'quirofano': new FormControl('', Validators.required),
      'fecha_programada': new FormControl('', Validators.required)
    });

    this.service.getCirugias('api/cirugia/all').subscribe( (data: any) => {
      this.cirugias = data;
      console.log(data);
    });
    this.service_doc.getDoctores('api/doctor/all').subscribe( (data: any) => {
      this.doctores = data;
      console.log(data);
    });
    this.service_pac.getPacientes('api/paciente/all').subscribe( (data:any) => {
      this.pacientes = data;
    });
    this.service_quir.getQuirofanos('api/quirofano/all').subscribe( (data: any) => {
      this.quirofanos = data;
      console.log(data);
    });

   }

  ngOnInit(): void {}

  create(){
    if ( this.forma.valid ) {
      this.service.create('api/cirugia/create',this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Agregado', 'Cirugia agregada correctamente');
        console.log(data);
        this.forma.reset();
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
      });
    } else {
      this.forma.markAllAsTouched();
    }
  }

  guardarCambios(idx: number) {
    if ( this.forma.valid ) {
      this.service.update('api/cirugia/update/' + idx, this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Actualizado', 'Cirugia actualizado correctamente');
        this.forma.reset();
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        console.log(error);
      }
      );
    }
  }

  Editar( cirugia: Cirugia ) {
    this.editar = true;
    this.forma.controls['doctor'].setValue(cirugia.id_doctor);
    this.forma.controls['paciente'].setValue(cirugia.id_paciente);
    this.forma.controls['quirofano'].setValue(cirugia.id_quirofano);
    this.forma.controls['fecha_programada'].setValue(cirugia.fecha_programada);
    this.idx = cirugia.id;
    // console.log(cirugia);

  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/cirugia/delete/' + id).subscribe( (data: any) => {
      this.alert('success', 'Eliminado', 'Cirugia eliminado correctamente');
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
export interface Cirugia {
  id: number;
  id_paciente: number;
  id_doctor: number;
  id_quirofano: number;
  paciente: string;
  doctor: string;
  quirofano: string;
  fecha_programada: Date;
}
