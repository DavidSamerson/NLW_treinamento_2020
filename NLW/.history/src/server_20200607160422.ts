import express from 'express';

const app = express();

//request -> obter dados
//response -> mandar resposta
app.get ('/users', (request, response) => {
    console.log('Teste de aplicação');
    //JSON
    // response.send('HELLO WORD');
    return response.json(["teste 1", "teste 2", "teste 3"]);
});

app.post('/users', (request, response) => {
    const user = {
        name: "David",
        email: "samerson@gmail.com"
    }

    return response.json(user);
    
});
    app.listen(3333);