import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const App = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar info
// POST = Cadastrar info
// PUT = Actualizar info de uma entidade
// PATCH = Actualizar info unica de uma entidade
// DELETE = Deletar uma info

App.use(cors());
App.use(express.json());
App.use(routes);

App.listen(process.env.PORT || 3333, () => {
  console.log('Http server running');
});
