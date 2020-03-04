'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EspecialidadSchema extends Schema {
  up () {
    this.create('especialidads', (table) => {
      table.increments()
      table.string('nombre',100).notNullable()
      teble.string('descripcion',400).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('especialidads')
  }
}

module.exports = EspecialidadSchema
