/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Cargo
Route.get('/cargos', 'CargosController.index');
Route.get('/cargo/:id', 'CargosController.show');
Route.post('/cargo', 'CargosController.store');
Route.put('/cargo', 'CargosController.update');

//Funcionário
Route.get('/funcionarios', 'FuncionariosController.index');
Route.get('/funcionario/:id', 'FuncionariosController.show');
Route.post('/funcionario', 'FuncionariosController.store');
Route.put('/funcionario', 'FuncionariosController.update');

//Gênero
Route.get('/generos', 'GenerosController.index');
Route.get('/genero/:id', 'GenerosController.show');
Route.post('/genero', 'GenerosController.store');
Route.put('/genero', 'GenerosController.update');

//Idioma
Route.get('/idiomas', 'IdiomasController.index');
Route.get('/idioma/:id', 'IdiomasController.show');
Route.post('/idioma', 'IdiomasController.store');
Route.put('/idioma', 'IdiomasController.update');

//Autor
Route.get('/autores', 'AutorsController.index');
Route.get('/autor/:id', 'AutorsController.show');
Route.post('/autor', 'AutorsController.store');
Route.put('/autor', 'AutorsController.update');

//Livro
Route.get('/livros', 'LivrosController.index');
Route.get('/livro/:id', 'LivrosController.show');

Route.post('/livro', 'LivrosController.store');
Route.put('/livro', 'LivrosController.update');

//LivroIdioma
Route.get('/livros_idiomas', 'LivroIdiomasController.index');
Route.post('/livro_idioma', 'LivroIdiomasController.store');
Route.put('/livro_idioma', 'LivroIdiomasController.update');

//Estoque
Route.get('/estoques', 'EstoquesController.index');
Route.post('/estoque', 'EstoquesController.store');
// Route.put('/livro_idioma', 'LivroIdiomasController.update');
