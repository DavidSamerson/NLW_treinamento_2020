import knex from 'knex';
import path from 'path';

const connection = knex ({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') // retorna o caminho baseado no sistema operacional e cria o arquivo lá
        //__dirname -> retorna o caminho para o diretório onde está sendo executado -> database
    },
});