import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      { cargoId: 1 , nome: 'Emanuel Nelson Pires', cpf: '40327995122', dt_nascimento: new Date('1996-03-17'), se_ativo: true, endereco: 'Quadra 301 Conjunto 7 numero 34', telefone: '6128287696', email: 'emanuel-pires71@whgames.com.br'},
      { cargoId: 2 , nome: 'Lorena Emily Mirella Peixoto', cpf: '90355233185', dt_nascimento: new Date('1987-07-11'), se_ativo: true, endereco: 'Quadra SQS 403 Bloco F numero 17', telefone: '6128211306', email: 'lorena_emily_peixoto@salvagninigroup.com'},
      { cargoId: 3 , nome: 'Benjamin Marcelo Renan Alves', cpf: '68741071190', dt_nascimento: new Date('1993-10-09'), se_ativo: true, endereco: 'Quadra 311 Conjunto 10-A numero 48', telefone: '6125924653', email: 'benjamin.marcelo.alves@suplementototal.com.br'},
      { cargoId: 4 , nome: 'Carolina Marlene Evelyn Carvalho', cpf: '09997522192', dt_nascimento: new Date('2000-10-10'), se_ativo: true, endereco: 'Quadra 14 Comércio Local 7 numero 26', telefone: '6139819549', email: 'carolina-carvalho75@acritica.com.br'},
      { cargoId: 5 , nome: 'Maria Sophie Teresinha Bernardes', cpf: '69265033118', dt_nascimento: new Date('1990-06-02'), se_ativo: true, endereco: 'Quadra QR 521 Conjunto 6 numero 21', telefone: '6128065586', email: 'maria-bernardes79@lonax.net'},
    ])
  }
}
