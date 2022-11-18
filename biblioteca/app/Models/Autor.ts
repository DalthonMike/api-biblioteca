import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Autor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome_autor: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Livro)
  public livro: BelongsTo<typeof Livro>
}
