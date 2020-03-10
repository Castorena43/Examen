'use strict'

/*
|--------------------------------------------------------------------------
| ConsultorioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const database = use('Database')
class ConsultorioSeeder {
    static async run() {
        await database.table('consultorios').insert([
            { nombre: 'Consultorio uno', descripcion: 'Consultorio uno', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Consultorio dos', descripcion: 'Consultorio dos', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Consultorio tres', descripcion: 'Consultorio tres', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Consultorio cuatro', descripcion: 'Consultorio cuatro', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Consultorio cinco', descripcion: 'Consultorio cinco', created_at: database.fn.now(), updated_at: database.fn.now() }
        ])
    }
}

module.exports = ConsultorioSeeder
