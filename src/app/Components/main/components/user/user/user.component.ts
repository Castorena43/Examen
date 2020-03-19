import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  forma: FormGroup;
  editar = false;
  idx: number;
  constructor(private service: UsersService) {
    this.forma = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.service.getUsers('api/user/all').subscribe( (data: any) => {
      this.users = data;
      console.log(data);
    });
   }

  ngOnInit(): void {
  }

  register() {
    if ( this.forma.valid ) {
      this.service.register('api/user/register', this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Agregado', 'User agregado correctamente');
      },
      error => this.alert('error', 'Something went wrong!', 'Oops...')
      );
    } else {
      this.forma.markAllAsTouched();
    }
  }

  guardarCambios(idx: number) {
    if ( this.forma.valid ) {
      this.service.update('api/user/update/' + idx, this.forma.value).subscribe( (data: any) => {
        this.alert('success', 'Actualizado', 'User actualizado correctamente');
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
        console.log(error);
      }
      );
    }
  }

  Editar( user: User ) {
    this.editar = true;
    this.forma.controls['username'].setValue(user.username);
    this.forma.controls['email'].setValue(user.email);
    this.idx = user.id;
  }

  Eliminar( id: number ) {
    console.log(id);
    this.service.delete('api/user/delete/' + id).subscribe( (data: any) => {
      this.alert('success', 'Eliminado', 'User eliminado correctamente');
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

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
