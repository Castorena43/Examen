import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuirofanoService } from 'src/app/services/quirofano.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quirofano',
  templateUrl: './quirofano.component.html',
  styleUrls: ['./quirofano.component.css']
})
export class QuirofanoComponent implements OnInit {

  quirofanos: Quirofano[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;

  constructor(private service: QuirofanoService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'descripcion': new FormControl('', Validators.required)
    });

    this.service.getQuirofanos('api/quirofano/all').subscribe( (data: any) => {
      this.quirofanos = data;
      console.log(data);
    });

   }

  ngOnInit(): void {
  }

  create(){
    if ( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.create('api/quirofano/create',this.forma.value).subscribe( (data: any) => {
        console.log(data);
        this.alert('success', 'Agregado', 'Quirofano agregado correctamente');
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        console.log(error);
      }
      );
    } else {
      this.forma.markAllAsTouched();
    }
  }

  guardarCambios(idx: number) {
    if( this.forma.valid ) {
      // console.log(this.forma.value);
      this.service.update('api/quirofano/update/' + idx, this.forma.value).subscribe( (data: any) => {
        // console.log(data);
        this.alert('success', 'Actualizado', 'Quirofano actualizado correctamente');
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

  Editar( quirofano : Quirofano ) {
    this.editar = true;
    this.forma.controls['nombre'].setValue(quirofano.nombre);
    this.forma.controls['descripcion'].setValue(quirofano.descripcion);
    this.idx = quirofano.id
  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/quirofano/delete/' + id).subscribe( (data: any) => {
      // console.log(data);
      this.alert('success', 'Eliminado', 'Quirofano eliminado correctamente');
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
export interface Quirofano{
  nombre: string;
  descripcion: string;
  id: number;
}
