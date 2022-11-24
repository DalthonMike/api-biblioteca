// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Livro from "App/Models/Livro";
import {Utils} from "App/util/Utils";
import Estoque from "App/Models/Estoque";
import Autor from "App/Models/Autor";
import Genero from "App/Models/Genero";

export default class LivrosController {
  index() {
    return Livro.all();
  }

  async show({request}) {
    const id = request.param('id');
    // let cargo = await Cargo.find(id)
    let livro = await Livro.query().where('id', id).first();

    if (Utils.isNullOrUndefinedOrEmpty(livro)) {
      return {
        messagem: 'Não livro um cargo com o identificador (' + id + ') informado'
      }
    } else {
      return {
        livro
      }
    }
  }

  async store({request}) {
    const dados = request.only(['titulo', 'autorId', 'generoId'])
    let autor = await Autor.query().where('id', dados.autorId).first();
    let genero = await Genero.query().where('id', dados.generoId).first();
    let estoque = await Estoque.find(1);

    if (Utils.isNullOrUndefinedOrEmpty(dados.titulo)) {
      return {
        mensagem: 'O titulo é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.autorId)) {
      return {
        mensagem: 'O autorId é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(dados.generoId)) {
      return {
        mensagem: 'O autorId é de preenchimento obrigatório'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(autor)) {
      return {
        mensagem: 'Não existe um autor com o id (' + dados.autorId + ') informado'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(genero)) {
      return {
        mensagem: 'Não existe um genero com o id (' + dados.generoId + ') informado'
      }
    } else if (Utils.isNullOrUndefinedOrEmpty(estoque)) {
      let estoque = new Estoque();
      estoque.quantidade = 1;
      await Estoque.create(estoque);
      dados.se_ativo = true;
      return Livro.create(dados);
    } else {
      estoque != undefined ? estoque.quantidade = estoque.quantidade + 1 : 0;
      await Estoque
        .query()
        .where('id', 1)
        .update({
          quantidade: estoque?.quantidade
        })

      dados.se_ativo = true;
      return Livro.create(dados);
    }
  }

  async update({request}) {
    const dados = request.only(['id', 'titulo', 'autorId', 'generoId']);
    await Livro
      .query()
      .where('id', dados.id)
      .update({
        titulo: dados.titulo,
        autorId: dados.autorId,
        generoId: dados.generoId,
      })
  }
}
