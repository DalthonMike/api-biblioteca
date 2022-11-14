import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Idioma from 'App/Models/Idioma'

export default class extends BaseSeeder {
  public async run () {
    await Idioma.createMany([
      { idioma: 'Portugues'},
      { idioma: 'Ingles'},
      { idioma: 'Italiano'},
      { idioma: 'Frances'},
      { idioma: 'Alemao'},
    ])
  }
}
