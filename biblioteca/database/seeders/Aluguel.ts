import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluguel from 'App/Models/Aluguel'

export default class extends BaseSeeder {
  public async run () {
    await Aluguel.createMany([
      { funcionarioId: 5, clienteId: 1, livroId: 3, dt_inicio: new Date('2022-11-07'), dt_fim: new Date('2022-11-21'), valor: 7.00},
      { funcionarioId: 5, clienteId: 3, livroId: 4, dt_inicio: new Date('2022-11-10'), dt_fim: new Date('2022-12-01'), valor: 10.5},
    ])
  }
}
