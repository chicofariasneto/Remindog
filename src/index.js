require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

var isServing = false
var whoServing = ""

const bot = new TelegramBot(process.env.TOKEN, {
    polling: true
})

bot.on('message', (message) => {
    const chatId = message.chat.id

    console.log(message)

    if (!isServing) {
        if (message.text === '/lembrar') {
            bot.sendMessage(chatId, "Olá")
            isServing = true
            whoServing = '/hi'
        }
        if (message.text === '/hello') {
            bot.sendMessage(chatId, "What's your age?")
            isServing = true
            whoServing = '/hello'
        }
    } else {
        if (whoServing === '/hi') {
            bot.sendMessage(chatId, "Hi " + message.text + "!")
            isServing = false
        }
        if (whoServing === '/hello') {
            bot.sendMessage(chatId, "You are " + message.text + " old!")
            isServing = false
        }
    }
})