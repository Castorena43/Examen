import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialidadComponent } from './Components/especialidad/especialidad.component';
import { CirugiaComponent } from './Components/cirugia/cirugia.component';
import { CitaComponent } from './Components/cita/cita.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { ConsultorioComponent } from './Components/consultorio/consultorio.component';
import { QuirofanoComponent } from './Components/quirofano/quirofano.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadComponent,
    CirugiaComponent,
    CitaComponent,
    DoctorComponent,
    PacienteComponent,
    ConsultorioComponent,
    QuirofanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
