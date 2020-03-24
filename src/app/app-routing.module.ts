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
import { MarvelComponent } from './Components/main/components/marvel/marvel.component';
import { UserComponent} from './Components/main/components/user/user/user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: 'marvel', component: MarvelComponent},
      {path: 'especialidad', component: EspecialidadComponent},
      {path: 'doctor', component: DoctorComponent},
      {path: 'paciente', component: PacienteComponent},
      {path: 'consultorio', component: ConsultorioComponent},
      {path: 'quirofano', component: QuirofanoComponent},
      {path: 'cita', component: CitaComponent},
      {path: 'cirugia', component: CirugiaComponent},
      {path: 'user', component: UserComponent}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'main/marvel'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
