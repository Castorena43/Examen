import { User } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  usuario: User;
  constructor(private auth: AuthService) {
    this.forma = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  register() {
    if (this.forma.valid) {
      this.usuario = this.forma.value;
      this.auth.register(this.usuario).subscribe( (data: any) => {
        console.log(data);
        this.alert('success', 'Exito', 'Usuario registrado correctamente');
      },
      error => {
        this.alert('error', 'Something went wrong!', 'Oops...');
      }
      );
    } else {
      this.forma.markAllAsTouched();
    }

  }

  alert(icon: any, title: any, msg: any): void {
    Swal.fire({
      icon: icon,
      title: title,
      text: msg
    });
  }
}
