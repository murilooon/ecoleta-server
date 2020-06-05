import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { titulo: 'Lampadas', image: 'lampadas.svg' },
    { titulo: 'Pilhas e Baterias', image: 'baterias.svg' },
    { titulo: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
    { titulo: 'Resíduos Orgânicos', image: 'eletronicos.svg' },
    { titulo: 'Resíduos Eletrônicos', image: 'organicos.svg' },
    { titulo: 'Óleo de Cozinha', image: 'oleo.svg' },
  ]);
}
