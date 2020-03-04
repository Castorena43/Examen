'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorSchema extends Schema {
  up () {
    this.create('doctors', (table) => {
      table.increments()
      table.string('nombre',150).notNullable()
      table.string('apellido_paterno',150).notNullable()
      table.string('apellido materno',150).notNullable()
      table.string('direccion',150).notNullable()
      table.string('telefono',13).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('doctors')
  }
}

module.exports = DoctorSchema
