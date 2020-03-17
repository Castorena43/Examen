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
    Route.put('/update/:id', 'Controller/EspecialidadController.update')
    Route.delete('/delete/:id', 'Controller/EspecialidadController.delete')
    Route.get('/all', 'Controller/EspecialidadController.all')
}).prefix('api/especialidad')

Route.group(() => {
    Route.post('/create', 'Controller/ConsultorioController.create')
    Route.put('/update/:id', 'Controller/ConsultorioController.update')
    Route.delete('/delete/:id', 'Controller/ConsultorioController.delete')
    Route.get('/all', 'Controller/ConsultorioController.all')
}).prefix('api/consultorio')

Route.group(() => {
    Route.post('/create', 'Controller/DoctorController.create')
    Route.put('/update/:id', 'Controller/DoctorController.update')
    Route.delete('/delete/:id', 'Controller/DoctorController.delete')
    Route.get('/all', 'Controller/DoctorController.all')
}).prefix('api/doctor')

Route.group(() => {
    Route.post('/create', 'Controller/PacienteController.create')
    Route.put('/update/:id', 'Controller/PacienteController.update')
    Route.delete('/delete/:id', 'Controller/PacienteController.delete')
    Route.get('/all', 'Controller/PacienteController.all')
}).prefix('api/paciente')

Route.group(() => {
    Route.post('/create', 'Controller/QuirofanoController.create')
    Route.put('/update/:id', 'Controller/QuirofanoController.update')
    Route.delete('/delete/:id', 'Controller/QuirofanoController.delete')
    Route.get('/all', 'Controller/QuirofanoController.all')
}).prefix('api/quirofano')

Route.group(() => {
    Route.post('/create', 'Controller/CitaController.create')
    Route.put('/update/:id', 'Controller/CitaController.update')
    Route.delete('/delete/:id', 'Controller/CitaController.delete')
    Route.get('/all', 'Controller/CitaController.all')
}).prefix('api/cita')

Route.group(() => {
    Route.post('/create', 'Controller/CirugiaController.create')
    Route.put('/update/:id', 'Controller/CirugiaController.update')
    Route.delete('/delete/:id', 'Controller/CirugiaController.delete')
    Route.get('/all', 'Controller/CirugiaController.all')
}).prefix('api/cirugia')

Route.group(() => {
    Route.post('/register', 'Controller/UserController.register')
    Route.post('/login', 'Controller/UserController.login')
    Route.delete('/logout', 'Controller/UserController.logout')
    Route.put('/update/:id', 'Controller/UserController.update')
    Route.delete('/delete/:id', 'Controller/UserController.delete')
    Route.get('/all', 'Controller/UserController.all ')
}).prefix('api/user')
Route.get('api/consumir', 'Controller/MarvelController.consumir');
