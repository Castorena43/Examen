'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CirugiaSchema extends Schema {
    up() {
        this.create('cirugias', (table) => {
            table.increments()
            table.integer('id_doctor').unsigned()
            table.integer('id_paciente').unsigned()
            table.integer('id_quirofano').unsigned()
            table.datetime('fecha_programada').notNullable()
            table.foreign('id_doctor').references('doctors.id').onDelete()
            table.foreign('id_paciente').references('pacientes.id').onDelete()
            table.foreign('id_quirofano').references('quirofanos.id').onDelete()
            table.timestamps()
        })
    }

    down() {
        this.drop('cirugias')
    }
}

module.exports = CirugiaSchema