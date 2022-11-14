import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genero from 'App/Models/Genero'

export default class extends BaseSeeder {
  public async run () {
    await Genero.createMany([
      { genero: 'Romance'},
      { genero: 'Fantasia'},
      { genero: 'Poesia'},
      { genero: 'Biografia'},
      { genero: 'Terror'},
    ])
  }
}
