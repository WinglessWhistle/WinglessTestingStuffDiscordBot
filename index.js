const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('WingBot Online!'));

app.listen(port, () => console.log(`WingBot live on - http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {

client.user.setPresence({
    status: 'online',
    activity: {
        name: 'I am WingBot!',
        type: 'STREAMING',
        url: 'https://www.twitch.tv/WinglessWhistle'
    }
})

})

// Bot Commands

// !ping
client.on('message', message => {
  if (message.content === '!ping') {  
    message.channel.send(`Your latency is ${Date.now() - message.createdTimestamp}ms. APIs Latency is ${Math.round(client.ws.ping)}ms`);
    message.react('🏓');
  }
});

// !invite
client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.reply('Invite link sent to you in dms!');
    msg.author.send('Invite WingBot using this link - http://bit.ly/WingBotInvite')
  }
});

// !avatar
client.on('message', msg => {
  if (msg.content === '!avatar') {
    msg.react('📷');  
    msg.reply('Here is your avatar!');
    msg.channel.send(msg.author.displayAvatarURL());
  }
});

// !true
client.on('message', msg => {
  if (msg.content === '!true') {
    msg.reply('test');
    msg.delete({ timeout: 100 });
    msg.react('🇹');
    msg.react('🇷');
    msg.react('🇺');
    msg.react('🇪');
  }
});


// Bot Token

client.login(process.env.DISCORD_TOKEN);