import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Aluguel from './Aluguel'
import Cargo from './Cargo'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public dt_nascimento: Date

  @column()
  public cargo_id: number

  @column()
  public se_ativo: boolean

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Aluguel)
  public aluguel: BelongsTo<typeof Aluguel>

  @hasOne(() => Cargo)
  public cargo: HasOne<typeof Cargo>
}
