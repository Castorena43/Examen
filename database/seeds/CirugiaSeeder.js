'use strict'

/*
|--------------------------------------------------------------------------
| CirugiaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const database = use('Database')
class CirugiaSeeder {
    static async run() {
        await database.table('cirugias').insert([{
            id_doctor: 1,
            id_paciente: 2,
            id_quirofano: 3,
            fecha_programada: '2020-07-01 18:00:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 4,
            id_paciente: 1,
            id_quirofano: 1,
            fecha_programada: '2020-09-15 13:00:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 1,
            id_paciente: 2,
            id_quirofano: 5,
            fecha_programada: '2020-05-19 13:45:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 2,
            id_paciente: 3,
            id_quirofano: 4,
            fecha_programada: '2020-04-03 13:25:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 3,
            id_paciente: 3,
            id_quirofano: 3,
            fecha_programada: '2020-05-19 13:45:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }])
    }
}

module.exports = CirugiaSeeder
