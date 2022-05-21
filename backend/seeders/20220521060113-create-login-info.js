'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
        email: 'abcd@ex.jp',
        password: "abcd"
      },
      {
        email: 'gima@mail.com',
        password: "gimagima"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};