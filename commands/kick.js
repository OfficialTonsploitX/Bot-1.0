const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'kick',
    description: 'Kick command + reason',
    execute(message, args) {

        const embed = new Discord.MessageEmbed()
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Dick head');
        const member = message.mentions.members.first();
        
        if (!member)
            return message.channel.send(emed), embed.setTitle("You have not mentioned a user")
        if (!member.kickable)
             
            return embed.setTitle("This user is unkickable"), message.channel.send(embed)
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return embed.setTitle("You need a reason"), message.channel.send(embed)

            if (reason) return member.kick().then(member => {
                embed.setTitle(`${member.user.tag} was kicked for ${reason}`)
                message.channel.send(embed);
            })
        }
    }
}