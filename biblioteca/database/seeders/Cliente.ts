import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      { nome: 'Danilo José Juan Carvalho', cpf: '15103991195', dt_nascimento: new Date('1966-07-11'), se_livro_alugado: true, se_ativo: true, endereco: 'Quadra SHS Quadra 6 Conjunto A Bloco C numero 20', telefone: '6138371161', email: 'danilo-carvalho91@defensoria.sp.gov.br'},
      { nome: 'Yago Fábio Moreira', cpf: '31050690117', dt_nascimento: new Date('1983-05-25'), se_livro_alugado: false, se_ativo: true, endereco: 'Quadra QNO 16 Conjunto K numero 09', telefone: '6127012500', email: 'yago_moreira@planicoop.com.br'},
      { nome: 'Geraldo Vicente Yuri Aragão', cpf: '36706973149', dt_nascimento: new Date('1964-07-08'), se_livro_alugado: true, se_ativo: true, endereco: 'Quadra CLN 102 Bloco A 48', telefone: '6128090662', email: 'geraldo_vicente_aragao@padrejuliano.com'},
      { nome: 'Bruna Daiane Evelyn Alves', cpf: '77176519129', dt_nascimento: new Date('1989-08-24'), se_livro_alugado: false, se_ativo: true, endereco: 'Quadra CLN 212 Bloco A numero 14', telefone: '6126378587', email: 'bruna.daiane.alves@raffinimobiliario.com.br'},
    ])
  }
}
