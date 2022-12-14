import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 300).notNullable()
      table.string('cpf', 11).unique()
      table.date('dt_nascimento').notNullable()
      table.boolean('se_ativo').notNullable()
      table.string('endereco', 300).notNullable()
      table.string('telefone', 15).notNullable()
      table.string('email', 70).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
