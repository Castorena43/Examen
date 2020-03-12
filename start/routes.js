'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.post('/create', 'Controller/EspecialidadController.create')
    Route.post('/update', 'Controller/EspecialidadController.update')
    Route.post('/delete', 'Controller/EspecialidadController.delete')
    Route.get('/all', 'Controller/EspecialidadController.all')
}).prefix('api/especialidad')

Route.group(() => {
    Route.post('/create', 'Controller/ConsultorioController.create')
    Route.post('/update', 'Controller/ConsultorioController.update')
    Route.post('/delete', 'Controller/ConsultorioController.delete')
    Route.get('/all', 'Controller/ConsultorioController.all')
}).prefix('api/consultorio')

Route.group(() => {
    Route.post('/create', 'Controller/DoctorController.create')
    Route.post('/update', 'Controller/DoctorController.update')
    Route.post('/delete', 'Controller/DoctorController.delete')
    Route.get('/all', 'Controller/DoctorController.all')
}).prefix('api/doctor')

Route.group(() => {
    Route.post('/create', 'Controller/PacienteController.create')
    Route.post('/update/:id', 'Controller/PacienteController.update')
    Route.delete('/delete/:id', 'Controller/PacienteController.delete')
    Route.get('/all', 'Controller/PacienteController.all')
}).prefix('api/paciente')

Route.group(() => {
    Route.post('/create', 'Controller/QuirofanoController.create')
    Route.post('/update', 'Controller/QuirofanoController.update')
    Route.post('/delete', 'Controller/QuirofanoController.delete')
    Route.get('/all', 'Controller/QuirofanoController.all')
}).prefix('api/quirofano')

Route.group(() => {
    Route.post('/create', 'Controller/CitaController.create')
    Route.post('/update', 'Controller/CitaController.update')
    Route.post('/delete', 'Controller/CitaController.delete')
    Route.get('/all', 'Controller/CitaController.all')
}).prefix('api/cita')

Route.group(() => {
    Route.post('/create', 'Controller/CirugiaController.create')
    Route.post('/update', 'Controller/CirugiaController.update')
    Route.post('/delete', 'Controller/CirugiaController.delete')
    Route.get('/all', 'Controller/CirugiaController.all')
}).prefix('api/cirugia')
