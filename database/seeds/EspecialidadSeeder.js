'use strict'

/*
|--------------------------------------------------------------------------
| EspecialidadSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const database = use('Database')
class EspecialidadSeeder {
    static async run() {
        await database.table('especialidads').insert([
            { nombre: 'Medico cirujano', descripcion: 'Medico especializado en cirugias de nivel bajo', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Medico', descripcion: 'Solo medico', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Cirujano', descripcion: 'Solo cirujano', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Medico odontologo', descripcion: 'Medico especializado en odontologia', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'enfermero', descripcion: 'Encargado de pacientes despues de cirugia', created_at: database.fn.now(), updated_at: database.fn.now() }
        ])
    }
}

module.exports = EspecialidadSeeder
