import {DateTime} from 'luxon'
import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Cargo from "App/Models/Cargo";

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
  public cargoId: number

  @hasMany(() => Cargo)
  public cargo: HasMany<typeof Cargo>;

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
}
