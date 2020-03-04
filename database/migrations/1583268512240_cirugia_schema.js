'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CirugiaSchema extends Schema {
  up () {
    this.create('cirugias', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cirugias')
  }
}

module.exports = CirugiaSchema
