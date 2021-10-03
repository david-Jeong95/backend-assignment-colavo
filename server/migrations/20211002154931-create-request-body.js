'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RequestBodies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_day_identifier: {
        type: Sequelize.STRING
      },
      timezone_identifier: {
        type: Sequelize.STRING
      },
      service_duration: {
        type: Sequelize.NUMBER
      },
      days: {
        type: Sequelize.NUMBER
      },
      timeslot_interval: {
        type: Sequelize.NUMBER
      },
      is_ignore_schedule: {
        type: Sequelize.BOOLEAN
      },
      is_ignore_workhour: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RequestBodies');
  }
};