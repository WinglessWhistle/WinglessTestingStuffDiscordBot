const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Literally just here to fill in the empty page from hosting WTSBot'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'my code',
            type: 'playing'
        },
        status: 'dnd'
    })
})

// Bot Commands

// !ping
client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong!');
  }
});

// !invite
client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.reply('Soon™');
  }
});


// !winglessentials
client.on('message', msg => {
  if (msg.content === '!winglessentials') {
    msg.reply('Winglessentials is a minecraft plugin recoded and aimed to replace the popular plugin Essentials and EssentialsX. Learn more about it by visiting the GitHub repo - https://github.com/WinglessWhistle/Winglessentials');
  }
});

// !avatar
client.on('message', message => {
  if (message.content === '!avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

// new join
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

// Bot Token

client.login(process.env.DISCORD_TOKEN);