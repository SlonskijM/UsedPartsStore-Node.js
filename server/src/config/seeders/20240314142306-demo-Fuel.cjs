"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Fuels", [
      {
        name: "Дизель",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Бензин",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Гибрид",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Электро",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Fuels", null, {});
  },
};
