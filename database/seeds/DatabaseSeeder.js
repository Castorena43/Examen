'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const EspecialidadSeeder = require('./EspecialidadSeeder')
const ConsultorioSeeder = require('./ConsultorioSeeder')
const QuirofanoSeeder = require('./QuirofanoSeeder')
const PacienteSeeder = require('./PacienteSeeder')
const DoctorSeeder = require('./DoctorSeeder')
const Cirugia = require('./CirugiaSeeder')
const Cita = require('./CitaSeeder')
class DatabaseSeeder {
    async run() {
        await EspecialidadSeeder.run()
        await ConsultorioSeeder.run()
        await QuirofanoSeeder.run()
        await PacienteSeeder.run()
        await DoctorSeeder.run()
        await Cirugia.run()
        await Cita.run()
    }
}

module.exports = DatabaseSeeder
