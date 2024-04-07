const bcrypt=  require('bcrypt')
const generator = require("generate-password");
const { join} = require("path");
const { sendPassword } = require("../../telegraf/tgBot.cjs");
const { config } = require("dotenv");

config({
  path: join(__dirname, "../../../.env"),
});

/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  up: async (queryInterface, Sequelize) => {
    const password = generator.generate({
      length: process.env.PASSWORD_LENTH,
      numbers: true,
    });

    const hashPassword = await bcrypt.hash(password, Number(process.env.SALT));

    await sendPassword(password)

    return await queryInterface.bulkInsert("Users", [
      {
        email: "sl@mail.ru",
        password: hashPassword,
        role: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
