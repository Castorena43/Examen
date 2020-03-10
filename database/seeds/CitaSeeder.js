'use strict'

/*
|--------------------------------------------------------------------------
| CitaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const database = use('Database')
class CitaSeeder {
    static async run() {
        await database.table('citas').insert([{
            id_doctor: 1,
            id_paciente: 2,
            id_consultorio: 3,
            fecha_programada: '2020-05-28 16:30:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 2,
            id_paciente: 1,
            id_consultorio: 3,
            fecha_programada: '2022-11-18 17:00:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 5,
            id_paciente: 5,
            id_consultorio: 5,
            fecha_programada: '2022-11-18 17:00:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 3,
            id_paciente: 4,
            id_consultorio: 5,
            fecha_programada: '2022-06-10 11:00:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            id_doctor: 2,
            id_paciente: 1,
            id_consultorio: 3,
            fecha_programada: '2022-12-25 09:00:00',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }])
    }
}

module.exports = CitaSeeder
