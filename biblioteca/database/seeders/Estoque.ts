import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Estoque from 'App/Models/Estoque'

export default class extends BaseSeeder {
  public async run () {
    await Estoque.createMany([
      { livro_id: 1, quantidade: 20},
      { livro_id: 2, quantidade: 18},
      { livro_id: 3, quantidade: 30},
      { livro_id: 4, quantidade: 34},
      { livro_id: 5, quantidade: 41},
    ])
  }
}
