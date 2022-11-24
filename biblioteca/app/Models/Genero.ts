import {DateTime} from 'luxon'
import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Livro from "App/Models/Livro";

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public genero: string

  @column()
  public livroId: string

  @hasMany(() => Livro)
  public livro: HasMany<typeof Livro>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
