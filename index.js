const  { Telegraf, Input } = require('telegraf');
const { message } = require('telegraf/filters')
const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const token = process.env.PASSWORD;
const token_weather = process.env.PASSWORD_WEATHER;

const bot = new Telegraf(token);
const api_url = 'https://api.openweathermap.org/data/2.5/weather';
bot.start((ctx) => ctx.reply('Бот работает, ура!'));
//bot.help((ctx) => ctx.reply('Бот отправит вам рандомного котика с фразой, которую вы ему напишите. И даже гифку по команде "Гифка'));
//bot.on(message('sticker'), (ctx) => ctx.reply('Классный стикер!'));
//bot.hears('Лох', (ctx) => ctx.reply('Сам лох!'))
// bot.command('weather', (ctx) => {
//     const user_message = ctx.message.text;
//     console.log(user_message);
//  axios.get(api_url, {
//     params: {
//         q: user_message,
//         appid: token_weather,
//         units: 'metric',
//         lang: 'ru',
//     }
//  }).then((response) => {
//     const weather = response.data.weather[0];
//     const temperature = response.data.main.temp;
//     const city = response.data.name;
//     console.log(response.data.weather[0])
//     ctx.reply(`Погода в городе ${city}: ${weather.description}, температура: ${temperature}°C`
//     )
//  }).catch((error) => {
//     ctx.reply('Ошибка, этого города не существует');
//  });

// });
bot.hears('Гифка', async (ctx) => {
    ctx.replyWithAnimation(Input.fromURLStream('https://cataas.com/cat/gif'));
   console.log(ctx.message.from.username)
   console.log(ctx.message.text)
   
});
bot.hears('Рандом', async (ctx) => {
     ctx.replyWithPhoto(Input.fromURLStream('https://cataas.com/cat'));
   console.log(ctx.message.from.username)
   console.log(ctx.message.text)
   
});
bot.hears(message, async (ctx) => {

     ctx.replyWithPhoto(Input.fromURLStream('https://cataas.com/cat/says/' + ctx.message.text));
   console.log(ctx.message.from.username)
   console.log(ctx.message.text)
   
});






bot.startPolling();

