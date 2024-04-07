const { Telegraf } = require('telegraf')
const dotenv = require('dotenv')

dotenv.config();

const telegramToken = process.env.TOKEN;

const bot = new Telegraf(telegramToken);

async function sendPassword(password) {
  await bot.telegram.sendMessage(process.env.CHATID, `${password}`);
}

module.exports = { sendPassword }