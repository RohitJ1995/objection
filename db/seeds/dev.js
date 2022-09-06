/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');

  await knex('channel').insert([
    { id: 1, name: 'channel1' },
    { id: 2, name: 'channel2' },
    { id: 3, name: 'channel3' },
  ]);
  await knex('user').insert([
    { id: 1, name: 'user1', email: 'user1@email.com', channelId: 1 },
    { id: 2, name: 'user2', email: 'user2@email.com', channelId: 3 },
    { id: 3, name: 'user3', email: 'user3@email.com', channelId: 2 },
    { id: 4, name: 'user4', email: 'user4@email.com' }
  ]);
  await knex('video').insert([
    { id: 1, title: 'title1', channelId: 1 },
    { id: 2, title: 'title2', channelId: 3 },
    { id: 3, title: 'title3', channelId: 2 },
    { id: 4, title: 'title4', channelId: 3 }
  ]);
};
