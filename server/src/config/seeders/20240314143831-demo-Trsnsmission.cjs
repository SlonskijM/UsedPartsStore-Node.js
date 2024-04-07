"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Transmissions", [
      {
        name: "AKПП",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "МКПП",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Робот",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Вариатор",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Transmissions", null, {});
  },
};
