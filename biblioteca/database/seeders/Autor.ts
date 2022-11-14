import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Autor from 'App/Models/Autor'

export default class extends BaseSeeder {
  public async run () {
    await Autor.createMany([
      { nome_autor: 'Erick Ryan da Cunha'},
      { nome_autor: 'Caio Rodrigo Barbosa'},
      { nome_autor: 'Breno Francisco Theo Pinto'},
      { nome_autor: 'Brenda Melissa Betina da Paz'},
      { nome_autor: 'Carolina Francisca Kamilly Cardoso'},
      { nome_autor: 'Márcio Sebastião Peixoto'},
      { nome_autor: 'Jéssica Francisca Isabelle Peixoto'},
      { nome_autor: 'Bárbara Nair Rita Aragão'},
    ])
  }
}
