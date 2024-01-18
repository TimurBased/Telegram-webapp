const TelegramBot = require('node-telegram-bot-api');

const token = '6811090476:AAGWizPVUyUKO3vARkCRhSvyytNpAsJFKPs';

const webAppUrl = 'https://ya.ru/';
const bot = new TelegramBot(token, {polling: true});



bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start'){
    await bot.sendMessage(chatId, 'Кнопка ниже', {
        reply_markup:{
            keyboard:[
                [{text:'Первая кнопка', web_app:{url:webAppUrl}}]
            ]
        }
    })
    await bot.sendMessage(chatId, 'Инлайн кнопка для url', {
        reply_markup:{
            inline_keyboard:[
                [{text:'Вторая кнопка', web_app:{url:webAppUrl}}]
            ]
        }
    })
  }
});