import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Livro from 'App/Models/Livro'

export default class extends BaseSeeder {
  public async run () {
    await Livro.createMany([
      { titulo: 'Correndo na cidade', autor_id: 1, genero_id: 1, se_ativo: true},
      { titulo: 'Tentações do meu fim', autor_id: 3, genero_id: 2, se_ativo: true},
      { titulo: 'Lutando com meus inimigos', autor_id: 5, genero_id: 3, se_ativo: true},
      { titulo: 'Criado pelas estrelas', autor_id: 7, genero_id: 4, se_ativo: true},
      { titulo: 'Sinais dos Titãs', autor_id: 2, genero_id: 5, se_ativo: true},
    ])
  }
}
