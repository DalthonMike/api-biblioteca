// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Estoque from "App/Models/Estoque";


export default class EstoquesController {
  async index() {
    let estoque = await Estoque.query().where('id', 1).first()
    return {
      quantidade: estoque?.quantidade
    }
  }
}
