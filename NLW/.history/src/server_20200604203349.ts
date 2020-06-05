import express from 'express';

const app = express();

app.get ('/users', (request, response) => {
    console.log('Teste de aplicação');
});
    app.listen(3333);