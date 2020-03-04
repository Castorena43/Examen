'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuirofanoSchema extends Schema {
  up () {
    this.create('quirofanos', (table) => {
      table.increments()
      table.string('nombre',100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('quirofanos')
  }
}

module.exports = QuirofanoSchema
