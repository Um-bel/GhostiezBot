const { execute } = require("./terminal");
const moment = require('moment'); 
module.exports = {
    name: 'serverinfo', 
    permissions: [], 
    desc: 'will get info on a certain server', 
    execute(client, message, args, cmd, Discord) {
        const embed = new Discord.MessageEmbed() 
        .setColor(`#961a5d`)
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .addField('General info', [
            `Name: ${message.guild.name}`, 
            `Owner: ${message.guild.owner}`
        ])
        .addField('Counts', [
            `Role count: ${message.guild.roles.cache.size}`, 
            `Channel Count: ${message.guild.channels.cache.size}`, 
            `Total Members: ${message.guild.memberCount}`, 
            `Emojis: ${message.guild.emojis.cache.size}`, 
        ]); 
message.channel.send(embed); 
    }
}