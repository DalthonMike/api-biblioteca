import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Aluguel from './Aluguel'
import Genero from './Genero'
import Autor from './Autor'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public autor_id: number

  @column()
  public genero_id: number

  @column()
  public se_ativo: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Aluguel)
  public aluguel: BelongsTo<typeof Aluguel>

  @hasOne(() => Genero)
  public genero: HasOne<typeof Genero>

  @hasOne(() => Autor)
  public autor: HasOne<typeof Autor>
}
