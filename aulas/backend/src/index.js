var  express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
/*
GET: Buscar uam informação do back-end
Post: Criar uma informação 
PUT:Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/
/*
Tipos de parâmetros:
Query: Parâmetros nomeados enviadosna rota após "?"(Filtros,paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos
*/
/*
dRIVER: select * from users
Query Builder: table('user').select('*').where
*/

app.use(cors({
   //git origin:"http://meuapp.com";
}));

app.use(express.json());
app.use(routes);
app.listen(3333);
