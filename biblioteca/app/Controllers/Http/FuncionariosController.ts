// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";
import {Utils} from "App/util/Utils";
import Cargo from "App/Models/Cargo";

export default class FuncionariosController {

  index() {
    return Funcionario.all();
  }

  async show({request}) {
    const id = request.param('id');
    // let cargo = await Cargo.find(id)
    let funcionario = await Funcionario.query().where('id', id).first();

    if (Utils.isNullOrUndefinedOrEmpty(funcionario)) {
      return {
        messagem: 'Não existe um funcionario com o identificador (' + id + ') informado'
      }
    } else {
      return funcionario;
    }
  }

  async store({request}) {
    const dados = request.only(['nome', 'cpf', 'dt_nascimento', 'cargoId', 'endereco', 'telefone', 'email'])

    let cargo = await Cargo.query().where('id', dados.cargoId).first();

    if (Utils.isNullOrUndefinedOrEmpty(dados.nome)) {
      return {
        mensagem: 'O nome é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(cargo)) {
      return {
        mensagem: 'Não existe um cargo com o id informado'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.cpf)) {
      return {
        mensagem: 'O CPF é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.dt_nascimento)) {
      return {
        mensagem: 'A dt_nascimento é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.cargoId)) {
      return {
        mensagem: 'O cargoId é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.endereco)) {
      return {
        mensagem: 'O endereco é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.telefone)) {
      return {
        mensagem: 'O telefone é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.email)) {
      return {
        mensagem: 'O email é de preenchimento obrigatório'
      }
    } else {
      dados.se_ativo = true;
      return Funcionario.create(dados);
    }
  }

  async update({request}) {
    const dados = request.only(['id', 'nome', 'cpf', 'dt_nascimento', 'cargoId', 'endereco', 'telefone', 'email'])
    await Funcionario
      .query()
      .where('id', dados.id)
      .update({
        nome: dados.nome,
        cpf: dados.cpf,
        dt_nascimento: dados.dt_nascimento,
        cargo_id: dados.cargo_id,
        endereco: dados.endereco,
        telefone: dados.telefone,
        email: dados.email
      })
  }
}
