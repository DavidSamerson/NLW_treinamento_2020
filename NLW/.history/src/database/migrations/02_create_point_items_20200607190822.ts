import Knex from 'knex';

export async function up(knex : Knex) {
    //criar tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points'); //chave estrangeira
        table.integer('item_id').notNullable().references('id').inTable('items'); //chave estrangeira
    });
}

export async function down(knex : Knex) {
    //voltar atrás
    return knex.schema.dropTable('point_items');

}