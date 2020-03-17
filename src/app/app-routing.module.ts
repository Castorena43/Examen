import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadComponent } from './Components/main/components/especialidad/especialidad.component';
import { PacienteComponent } from './Components/main/components/paciente/paciente.component';
import { ConsultorioComponent } from './Components/main/components/consultorio/consultorio.component';
import { QuirofanoComponent } from './Components/main/components/quirofano/quirofano.component';
import { CitaComponent } from './Components/main/components/cita/cita.component';
import { CirugiaComponent } from './Components/main/components/cirugia/cirugia.component';
import { DoctorComponent } from './Components/main/components/doctor/doctor.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainComponent } from './Components/main/main.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent,
    children: [
      {path: 'especialidad', component: EspecialidadComponent},
      {path: 'doctor', component: DoctorComponent},
      {path: 'paciente', component: PacienteComponent},
      {path: 'consultorio', component: ConsultorioComponent},
      {path: 'quirofano', component: QuirofanoComponent},
      {path: 'cita', component: CitaComponent},
      {path: 'cirugia', component: CirugiaComponent}
    ],
    canActivate: [AuthGuard]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
