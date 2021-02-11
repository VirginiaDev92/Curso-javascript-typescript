import Knex from 'knex';
/**
 Esses metodos são os que são executados quando fazemos a migração
 up quando --> criar migração
 down quando --> desfazer migração
 */
export async function up(knex:Knex){
    return knex.schema.createTable('locations',table=>{/*metodo de criar tabela */
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('email').notNullable();
        table.string('watsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('estadoUF').notNullable();
    });
}
export async function down(knex:Knex){/*metodo de deletarr tabela */
    return knex.schema.dropTable('locarions');  
}