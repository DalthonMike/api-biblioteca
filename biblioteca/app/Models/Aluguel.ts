import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'
import Cliente from './Cliente'
import Funcionario from './Funcionario'

export default class Aluguel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public funcionarioId: number

  @column()
  public clienteId: number

  @column()
  public livroId: number

  @column()
  public dt_inicio: Date

  @column()
  public dt_fim: Date

  @column()
  public valor: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Livro)
  public livro: HasMany<typeof Livro>

  @hasOne(() => Cliente)
  public cliente: HasOne<typeof Cliente>

  @hasOne(() => Funcionario)
  public funcionario: HasOne<typeof Funcionario>
}
