import express from 'express';

const app = express();

const users = ["teste 1", "teste 2", "teste 3", "teste 4"];

//request -> obter dados
//response -> mandar resposta
app.get ('/users', (request, response) => {
    console.log('Teste de aplicação');
    //JSON
    // response.send('HELLO WORD');
    return response.json(users);
});

app.get ('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const user = {
        name: "David",
        email: "samerson@gmail.com"
    }

    return response.json(user);

});

app.listen(3333);