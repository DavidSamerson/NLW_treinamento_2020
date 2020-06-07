import express from 'express';

const app = express();

const users = ["usuario 0", "usuario 1", "usuario 2", "usuario 3"];

//request -> obter dados
//response -> mandar resposta
app.get ('/users', (request, response) => {
    console.log('Teste de aplicação');
    const search = String(request.query.search);
    
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
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