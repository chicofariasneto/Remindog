require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

const { pool } = require('./database/connection')

const {
    findUser,
    manageUser,
} = require('./app/logic/userLogic');

const {
    updateUser,
} = require('./app/model/userModel')

const {
    insertReminder,
    updateReminder,
} = require('./app/model/reminderModel')

const bot = new TelegramBot(process.env.TOKEN, {
    polling: true
})

bot.on('message', async (message) => {

    const chatId = message.chat.id
    const username = message.from.username

    await manageUser(chatId, username)

    const user = await findUser(chatId)
    
    if (!user.serving) {
        var content = message.text.split(' ')

        date = content[1]
        time = content[2]

        const reminder = await pool.query(insertReminder, [chatId, date + " " + time, ''])
        const id_reminder = reminder.rows[0].id_reminder

        await pool.query(updateUser, ['true', 'lembrar', id_reminder, chatId])

        bot.sendMessage(chatId, "Digite uma mensagem para o lembrete:")
    }
    else {
        await pool.query(updateReminder, [message.text, user.reminder_aux])
        await pool.query(updateUser, ['false', '', null, chatId])
        
        bot.sendMessage(chatId, "Seu lembrete foi cadastrado com sucesso.")
    }
})