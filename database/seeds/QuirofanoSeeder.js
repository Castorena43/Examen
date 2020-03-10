'use strict'

/*
|--------------------------------------------------------------------------
| QuirofanoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const database = use('Database')
class QuirofanoSeeder {
    static async run() {
        await database.table('quirofanos').insert([
            { nombre: 'Quirofano uno', descripcion: 'Quirofano uno', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Quirofano dos', descripcion: 'Quirofano dos', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Quirofano tres', descripcion: 'Quirofano tres', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Quirofano cuatro', descripcion: 'Quirofano cuatro', created_at: database.fn.now(), updated_at: database.fn.now() },
            { nombre: 'Quirofano cinco', descripcion: 'Quirofano cinco', created_at: database.fn.now(), updated_at: database.fn.now() }
        ])
    }
}

module.exports = QuirofanoSeeder
