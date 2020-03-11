'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteSchema extends Schema {
    up() {
        this.create('pacientes', (table) => {
            table.increments()
            table.string('nombre', 150).notNullable()
            table.string('apellido_paterno', 150).notNullable()
            table.string('apellido_materno', 150).notNullable()
            table.string('nss', 30).notNullable()
            table.string('direccion', 150).notNullable()
            table.string('telefono', 13).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('pacientes')
    }
}

module.exports = PacienteSchema
