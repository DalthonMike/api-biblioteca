import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cargo from 'App/Models/Cargo'

export default class extends BaseSeeder {
  public async run () {
    await Cargo.createMany([
      { cargo: 'Dono', se_ativo: true},
      { cargo: 'Gerente', se_ativo: true},
      { cargo: 'Caixa', se_ativo: true},
      { cargo: 'Estoquista', se_ativo: true},
      { cargo: 'Atendente', se_ativo: true},
    ])
  }
}
