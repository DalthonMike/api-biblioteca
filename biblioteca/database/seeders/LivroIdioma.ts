import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LivroIdioma from 'App/Models/LivroIdioma'

export default class extends BaseSeeder {
  public async run () {
    await LivroIdioma.createMany([
      { livroId: 1, idiomaId: 1},
      { livroId: 2, idiomaId: 1},
      { livroId: 3, idiomaId: 1},
      { livroId: 4, idiomaId: 1},
      { livroId: 5, idiomaId: 1},
      { livroId: 1, idiomaId: 2},
      { livroId: 2, idiomaId: 2},
      { livroId: 3, idiomaId: 2},
      { livroId: 4, idiomaId: 2},
      { livroId: 5, idiomaId: 2},
      { livroId: 1, idiomaId: 3},
      { livroId: 2, idiomaId: 3},
      { livroId: 3, idiomaId: 3},
      { livroId: 4, idiomaId: 3},
      { livroId: 5, idiomaId: 3},
      { livroId: 1, idiomaId: 4},
      { livroId: 2, idiomaId: 4},
      { livroId: 3, idiomaId: 4},
      { livroId: 4, idiomaId: 4},
      { livroId: 5, idiomaId: 4},
      { livroId: 1, idiomaId: 5},
      { livroId: 2, idiomaId: 5},
      { livroId: 3, idiomaId: 5},
      { livroId: 4, idiomaId: 5},
      { livroId: 5, idiomaId: 5},
    ])
  }
}
