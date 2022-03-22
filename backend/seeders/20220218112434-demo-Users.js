'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
        email: 'abcd@ex.jp',
        password: "ddddduuu"
      },
      {
        email: 'ssssd@edd.com',
        password: "ddddiiiii"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};