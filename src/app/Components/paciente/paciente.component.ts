import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  especialidades: any[] = [];
  forma: FormGroup;

  constructor(private service: PacienteService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'apellido_Paterno': new FormControl('', Validators.required),
      'apellido_Materno': new FormControl('', Validators.required),
      'nss': new FormControl('', Validators.required),
      'direccion': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
    });



   }

  ngOnInit(): void {
    this.service.getEspecialidades('api/paciente/all').subscribe( (data: any) => {
      this.especialidades = data;
      console.log(data);
    });
  }

  guardarCambios(){
    if( this.forma.valid ){
      console.log(this.forma.value);
    }
  }
}
