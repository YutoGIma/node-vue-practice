'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn("users", "app", {
      type:Sequelize.STRING
    })
  },

  async down (queryInterface) {
    queryInterface.removeColumn("users", "app")
  }
};
