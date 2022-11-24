// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {Utils} from "App/util/Utils";
import Idioma from "App/Models/Idioma";

export default class IdiomasController {
  index() {
    return Idioma.all();
  }

  store({request}) {
    const dados = request.only(['idioma'])
    if (Utils.isNullOrUndefinedOrEmpty(dados.idioma)) {
      return {
        mensagem: 'O idioma é de preenchimento obrigatório'
      }
    }
    return Idioma.create(dados);
  }

  async show({request}) {
    const id = request.param('id');
    // let cargo = await Cargo.find(id)
    let idioma = await Idioma.query().where('id', id).first()

    if (Utils.isNullOrUndefinedOrEmpty(idioma)) {
      return {
        messagem: 'Não existe um idioma com o identificador (' + id + ') informado'
      }
    } else {
      return {
        idioma
      }
    }
  }

  async update({request}) {
    const dados = request.only(['id', 'idioma'])
    await Idioma
      .query()
      .where('id', dados.id)
      .update({
        idioma: dados.idioma
      })
  }
}
