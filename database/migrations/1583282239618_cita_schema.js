'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitaSchema extends Schema {
    up() {
        this.create('citas', (table) => {
            table.increments()
            table.integer('id_doctor').unsigned()
            table.integer('id_paciente').unsigned()
            table.integer('id_consultorio').unsigned()
            table.datetime('fecha_programada').notNullable()
            table.foreign('id_doctor').references('doctors.id')
            table.foreign('id_paciente').references('pacientes.id')
            table.foreign('id_consultorio').references('consultorios.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('citas')
    }
}

module.exports = CitaSchema
