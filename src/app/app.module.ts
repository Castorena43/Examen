import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainComponent } from './Components/main/main.component';
import { EspecialidadComponent } from './Components/main/components/especialidad/especialidad.component';
import { CirugiaComponent } from './Components/main/components/cirugia/cirugia.component';
import { CitaComponent } from './Components/main/components/cita/cita.component';
import { DoctorComponent } from './Components/main/components/doctor/doctor.component';
import { PacienteComponent } from './Components/main/components/paciente/paciente.component';
import { ConsultorioComponent } from './Components/main/components/consultorio/consultorio.component';
import { QuirofanoComponent } from './Components/main/components/quirofano/quirofano.component';
import { MarvelComponent } from './Components/main/components/marvel/marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadComponent,
    CirugiaComponent,
    CitaComponent,
    DoctorComponent,
    PacienteComponent,
    ConsultorioComponent,
    QuirofanoComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    MarvelComponent
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
