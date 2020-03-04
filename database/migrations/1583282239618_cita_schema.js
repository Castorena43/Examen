'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitaSchema extends Schema {
  up () {
    this.create('citas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('citas')
  }
}

module.exports = CitaSchema
