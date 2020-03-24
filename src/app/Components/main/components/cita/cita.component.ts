import { Doctor } from '../doctor/doctor.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CitaService } from 'src/app/services/cita.service';
import { Paciente } from '../paciente/paciente.component';
import { Consultorio } from '../consultorio/consultorio.component';
import { DoctorService } from 'src/app/services/doctor.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { ConsultorioService } from 'src/app/services/consultorio.service';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  citas: Cita[] = [];
  doctores: Doctor[] = [];
  pacientes: Paciente[] = [];
  consultorios: Consultorio[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;

  constructor(private service: CitaService, private service_doc: DoctorService,
              private service_pac: PacienteService, private service_cons: ConsultorioService) {
    this.forma = new FormGroup({
      'doctor': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'paciente': new FormControl('', Validators.required),
      'consultorio': new FormControl('', Validators.required),
      'fecha_programada': new FormControl('', Validators.required)
    });

    this.service.getCitas('api/cita/all').subscribe( (data: any) => {
      this.citas = data;
      console.log(data);
    });
    this.service_doc.getDoctores('api/doctor/all').subscribe( (data: any) => {
      this.doctores = data;
      console.log(data);
    });
    this.service_pac.getPacientes('api/paciente/all').subscribe( (data:any) => {
      this.pacientes = data;
    });
    this.service_cons.getConsultorios('api/consultorio/all').subscribe( (data: any) => {
      this.consultorios = data;
      console.log(data);
    });

   }

  ngOnInit(): void {}

  create(){
    if ( this.forma.valid ) {
      this.service.create('api/cita/create', this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Agregado', 'Cita agregada correctamente');
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
      this.service.update('api/cita/update/' + idx, this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Actualizado', 'Doctor actualizado correctamente');
        this.forma.reset();
        this.editar = false;
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        console.log(error);
      }
      );
    }
  }

  Editar( cita: Cita ) {
    this.editar = true;
    this.forma.controls['doctor'].setValue(cita.id_doctor);
    this.forma.controls['paciente'].setValue(cita.id_paciente);
    this.forma.controls['consultorio'].setValue(cita.id_consultorio);
    this.forma.controls['fecha_programada'].setValue(cita.fecha_programada);
    this.idx = cita.id;
    // console.log(cita);

  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/cita/delete/' + id).subscribe( (data: any) => {
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
export interface Cita {
  id: number;
  id_paciente: number;
  id_doctor: number;
  id_consultorio: number;
  paciente: string;
  doctor: string;
  consultorio: string;
  fecha_programada: Date;
}
