import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './Funcionario'

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cargo: string

  @column()
  public se_ativo: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>
}
