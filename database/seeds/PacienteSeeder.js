'use strict'

/*
|--------------------------------------------------------------------------
| PacienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const database = use('Database')
class PacienteSeeder {
    static async run() {
        await database.table('pacientes').insert([{
            nombre: 'Julio Cesar',
            apellido_paterno: 'Leija',
            apellido_materno: 'Ontiveros',
            nss: '54ddgdf234r3fd1sf6',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8711191974',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Hector',
            apellido_paterno: 'Castorena',
            apellido_materno: 'Castillo',
            nss: 'ds6543431342894sdfs',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8732165132',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Carlos',
            apellido_paterno: 'Marentes',
            apellido_materno: 'Rios',
            nss: '23ldsf090sdfm2232',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8138132856',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Luis Jesus',
            apellido_paterno: 'Carrillo',
            apellido_materno: 'Perez',
            nss: '1d1d23d329412edf633g',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8139651959',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }, {
            nombre: 'Irasema',
            apellido_paterno: 'Soriano',
            apellido_materno: 'Ruiz',
            nss: '32oh490jp34r86t4685',
            direccion: 'Feliciano Chabot 1544 A Rincon de la Merced',
            telefono: '8719654189',
            created_at: database.fn.now(),
            updated_at: database.fn.now()
        }])
    }
}

module.exports = PacienteSeeder
