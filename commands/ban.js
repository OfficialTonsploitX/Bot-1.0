const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'ban',
    description: "Ban's people + reason",
    execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Dick head');
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user")
        if (!member.bannable)
            return message.channel.send("This user is unbannable")
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.ban().then(member => {
                message.channel.send(`${member.user.tag} was banned, no reason was provided`);
            })

            if (reason) return member.ban(reason).then(member => {
                message.channel.send(`${member.user.tag} was banned for ${reason}`);
            })
        }
    }
}