const Discord = require('discord.js')
const bot = new Discord.Client()
const { PREFIX, TOKEN, AUTHOR } = require('./config.json')
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', ()=> {
    bot.user.setActivity(`Made by ${AUTHOR}`)
    bot.user.setStatus("dnd")
    console.log(`${bot.user.username} is online!`)

})

bot.on('message', (message)=> {
    let prefix = PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot || message.channel.type != 'text') return;
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length);
    let args = MessageArray.slice(1)
    



    if(cmd == "kick") {
        bot.commands.get('kick').execute(message, args);
    }

    if(cmd == "ban") {
        bot.commands.get('ban').execute(message, args);
    }

    if(cmd == "bypass") {
        bot.commands.get('assd').execute(message, args);
    }

})


bot.login(TOKEN)