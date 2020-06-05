import express from 'express';

const app = express();
app.get ('/users', () => {
    console.log('Teste de aplicação');
});
    app.listen(3333);