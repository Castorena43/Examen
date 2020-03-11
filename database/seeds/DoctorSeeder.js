'use strict'

/*
|--------------------------------------------------------------------------
| DoctorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const database = use('Database')
class DoctorSeeder {
    static async run() {
        await database.table('doctors').insert([{
            nombre: 'Doctor Julio Cesar',
            apellido_paterno: 'Leija',
            apellido_materno: 'Ontiveros',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8711191974',
            id_especialidad: 1,
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Doctor Hector',
            apellido_paterno: 'Castorena',
            apellido_materno: 'Castillo',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8732165132',
            id_especialidad: 2,
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Doctor Carlos',
            apellido_paterno: 'Marentes',
            apellido_materno: 'Rios',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8138132856',
            id_especialidad: 3,
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Doctor Luis Jesus',
            apellido_paterno: 'Carrillo',
            apellido_materno: 'Perez',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8139651959',
            id_especialidad: 4,
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Doctora Irasema',
            apellido_paterno: 'Soriano',
            apellido_materno: 'Ruiz',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8719654189',
            id_especialidad: 5,
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }])
    }
}

module.exports = DoctorSeeder
