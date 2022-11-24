import {DateTime} from 'luxon'
import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Genero from "App/Models/Genero";
import Autor from "App/Models/Autor";

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public autorId: number

  @hasMany(() => Autor)
  public autor: HasMany<typeof Autor>;

  @column()
  public generoId: number

  @hasMany(() => Genero)
  public genero: HasMany<typeof Genero>;

  @column()
  public se_ativo: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
