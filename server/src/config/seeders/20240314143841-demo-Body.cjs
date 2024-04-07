"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Bodys", [
      {
        name: "Седан",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Хэтчбэк",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Универсал",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Внедорожник",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Минивэн",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Купе",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Bodys", null, {});
  },
};
