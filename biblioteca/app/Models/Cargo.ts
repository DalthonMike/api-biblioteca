import {DateTime} from 'luxon'
import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Funcionario from "App/Models/Funcionario";

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cargo: string

  @column()
  public se_ativo: boolean

  @column()
  public funcionarioId: number

  @hasMany(() => Funcionario)
  public funcionario: HasMany<typeof Funcionario>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
