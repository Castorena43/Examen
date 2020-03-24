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
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { UserComponent } from './Components/main/components/user/user/user.component';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1008461747491-m37cu1jfd95ls9mnkm93umopl27781pl.apps.googleusercontent.com')
  }
]);
export function provideConfig() {
  return config;
}
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
    MarvelComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
