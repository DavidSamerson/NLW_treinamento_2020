import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.listen(3333);







// const users = ["usuario 0", "usuario 1", "usuario 2", "usuario 3"];

// app.get ('/', (request, response) => {
//     return response.json({message : 'hello'});
//  });

//request -> obter dados
//response -> mandar resposta
// app.get ('/users', (request, response) => {
//     console.log('Teste de aplicação');

//     //Query Param: filtros, não obrigatórios..

//     const search = String(request.query.search);
//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
//     //JSON
//     // response.send('HELLO WORD');
//     return response.json(filteredUsers);
// });
// app.get ('/users/:id', (request, response) => {
//     const id = Number(request.params.id);
//     const user = users[id];
//     return response.json(user);
// });

// app.post('/users', (request, response) => {

//     //request body: criação e atualização de informação
//     const data = request.body;

//     const user = {
//         name: data.Name,
//         email: data.Email
//     }

//     return response.json(user);

// });