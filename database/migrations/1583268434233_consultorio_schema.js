'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultorioSchema extends Schema {
  up () {
    this.create('consultorios', (table) => {
      table.increments()
      table.string('nombre',80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('consultorios')
  }
}

module.exports = ConsultorioSchema
