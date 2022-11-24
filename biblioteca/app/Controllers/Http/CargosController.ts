// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cargo from "App/Models/Cargo";
import {Utils} from "App/util/Utils";

export default class CargosController {
  index() {
    return Cargo.all();
  }

  store({request}) {
    const dados = request.only(['cargo'])
    dados.se_ativo = true;
    if (Utils.isNullOrUndefinedOrEmpty(dados.cargo)) {
      return {
        mensagem: 'O cargo é de preenchimento obrigatório'
      }
    }
    return Cargo.create(dados);
  }

  async show({request}) {
    const id = request.param('id');
    // let cargo = await Cargo.find(id)
    let cargo = await Cargo.query().where('id', id).preload('funcionario').first()

    if (Utils.isNullOrUndefinedOrEmpty(cargo)) {
      return {
        messagem: 'Não existe um cargo com o identificador (' + id + ') informado'
      }
    } else {
      return cargo;
    }
  }

  async update({request}) {
    const dados = request.only(['id', 'cargo', 'se_ativo'])
    await Cargo
      .query()
      .where('id', dados.id)
      .update({cargo: dados.cargo, se_ativo: dados.se_ativo})
  }
}
