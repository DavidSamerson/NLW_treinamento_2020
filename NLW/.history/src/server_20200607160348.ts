import express from 'express';

const app = express();

//request -> obter dados
//response -> mandar resposta
app.get ('/users', (request, response) => {
    console.log('Teste de aplicação');
    //JSON
    // response.send('HELLO WORD');
    response.json(["teste 1", "teste 2", "teste 3"]);
});

app.post('/users', (request, response) => {
    const user = {
        name: "David",
        email: "samerson@gmail.com"
    }
});
    app.listen(3333);