const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'info',
    description: 'Information about the bot!',
    execute(message, args) {
		
		const embed = Discord.MessageEmbed()
		.setTitle(".bypass - Bypasses the current link you gave!")
		.setAuthor("Darc Remake")
		
		message.channel.send(emed)
		
    }
}