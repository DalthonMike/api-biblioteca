import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Estoque extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public livro_id: number

  @column()
  public quantidade: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Livro)
  public livro: BelongsTo<typeof Livro>
}
