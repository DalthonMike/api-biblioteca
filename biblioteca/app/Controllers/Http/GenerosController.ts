// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {Utils} from "App/util/Utils";
import Genero from "App/Models/Genero";

export default class GenerosController {
  index() {
    return Genero.all();
  }

  store({request}) {
    const dados = request.only(['genero'])
    if (Utils.isNullOrUndefinedOrEmpty(dados.genero)) {
      return {
        mensagem: 'O gênero é de preenchimento obrigatório'
      }
    }
    return Genero.create(dados);
  }

  async show({request}) {
    const id = request.param('id');
    // let cargo = await Cargo.find(id)
    let genero = await Genero.query().where('id', id).preload('livro').first()

    if (Utils.isNullOrUndefinedOrEmpty(genero)) {
      return {
        messagem: 'Não existe um cargo com o identificador (' + id + ') informado'
      }
    } else {
      return {
        genero
      }
    }
  }

  async update({request}) {
    const dados = request.only(['id', 'genero'])
    await Genero
      .query()
      .where('id', dados.id)
      .update({
        genero: dados.genero
      })
  }

}
