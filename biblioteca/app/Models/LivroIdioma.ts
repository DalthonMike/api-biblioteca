import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'
import Idioma from './Idioma'

export default class LivroIdioma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public livroId: number

  @column()
  public idiomaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Livro)
  public livro: ManyToMany<typeof Livro>

  @manyToMany(() => Idioma)
  public projects: ManyToMany<typeof Idioma>
}
