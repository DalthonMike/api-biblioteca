// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {Utils} from "App/util/Utils";
import Autor from "App/Models/Autor";

export default class AutorsController {
  index() {
    return Autor.all();
  }

  async show({request}) {
    const id = request.param('id');
    // let cargo = await Cargo.find(id)
    let autor = await Autor.query().where('id', id).preload('livro').first()

    if (Utils.isNullOrUndefinedOrEmpty(autor)) {
      return {
        messagem: 'Não existe um autor com o identificador (' + id + ') informado'
      }
    } else {
      return {
        autor
      }
    }
  }

  store({request}) {
    const dados = request.only(['nome_autor'])
    if (Utils.isNullOrUndefinedOrEmpty(dados.nome_autor)) {
      return {
        mensagem: 'O nome_autor é de preenchimento obrigatório'
      }
    }
    return Autor.create(dados);
  }

  async update({request}) {
    const dados = request.only(['id', 'nome_autor'])

    let autor = await Autor.query().where('id', dados.id);

    if (Utils.isNullOrUndefinedOrEmpty(autor)) {
      return {
        messagem: 'Não existe um autor com o identificador (' + dados.id + ') informado'
      }
    } else {
      await Autor
        .query()
        .where('id', dados.id)
        .update({
          nome_autor: dados.nome_autor
        })
    }
  }
}
