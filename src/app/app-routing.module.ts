import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadComponent } from './Components/especialidad/especialidad.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { ConsultorioComponent } from './Components/consultorio/consultorio.component';
import { QuirofanoComponent } from './Components/quirofano/quirofano.component';
import { CitaComponent } from './Components/cita/cita.component';
import { CirugiaComponent } from './Components/cirugia/cirugia.component';
import { DoctorComponent } from './Components/doctor/doctor.component';


const routes: Routes = [
  {path:"especialidad",component:EspecialidadComponent},
  {path:"doctor",component:DoctorComponent},
  {path:"paciente",component:PacienteComponent},
  {path:"consultorio",component:ConsultorioComponent},
  {path:"quirofano",component:QuirofanoComponent},
  {path:"cita",component:CitaComponent},
  {path:"cirugia",component:CirugiaComponent},
  {path:"**",pathMatch:"full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
