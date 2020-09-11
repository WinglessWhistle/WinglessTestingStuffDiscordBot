const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Literally just here to fill in the empty page from hosting WTSBot'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {

// Bot Commands

// !ping
client.on('message', message => {
  if (message.content === '!ping') {  
    message.channel.send(`Your latency is ${Date.now() - message.createdTimestamp}ms. APIs Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

// !invite
client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.reply('Invite link sent to you in dms!');
    msg.author.sent('Invite WingBot using this link - http://bit.ly/WingBotInvite')
  }
});

// !avatar
client.on('message', msg => {
  if (msg.content === '!avatar') {
    msg.reply('Here is your avatar!');
    msg.channel.send(msg.author.displayAvatarURL());
  }
});

// Bot Token

client.login(process.env.DISCORD_TOKEN);