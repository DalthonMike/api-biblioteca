import {DateTime} from 'luxon'
import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Livro from "App/Models/Livro";

export default class Autor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome_autor: string

  @column()
  public livroId: number

  @hasMany(() => Livro)
  public livro: HasMany<typeof Livro>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
