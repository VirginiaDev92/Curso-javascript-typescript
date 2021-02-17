import Knex from 'knex';

export async function seed(knex:Knex) {
    await knex('items').insert([
        {title:'Papeis e Papelão',image:'papel.png'},
        {title:'Vidro e Lampadas',image:'vidro.png'},
        {title:'Oleo de cozinha',image:'oleo.png'},
        {title:'Bateria e Pilhas',image:'bateria.png'},
    ]);
}