import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Aluguel from './Aluguel'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public dt_nascimento: Date

  @column()
  public se_livro_alugado: boolean

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
}
