import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Livro from 'App/Models/Livro'

export default class extends BaseSeeder {
  public async run () {
    await Livro.createMany([
      { titulo: 'Correndo na cidade', autorId: 1, generoId: 1, se_ativo: true},
      { titulo: 'Tentações do meu fim', autorId: 3, generoId: 2, se_ativo: true},
      { titulo: 'Lutando com meus inimigos', autorId: 5, generoId: 3, se_ativo: true},
      { titulo: 'Criado pelas estrelas', autorId: 7, generoId: 4, se_ativo: true},
      { titulo: 'Sinais dos Titãs', autorId: 2, generoId: 5, se_ativo: true},
    ])
  }
}
