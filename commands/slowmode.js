const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    permissions: ["MANAGE_MESSAGES"], 
    description: 'Sets SlowMode for a Channel',
async execute(client, message, args, cmd, Discord){


    if (!args[0]) return message.channel.send('Invalid Args: What do you want the slowmode to be set to?'); 
    if(isNaN(args[0])) return message.channel.send('Please type a real number!');
    if (args[0] > 21600 || args[0] < 1) return message.channel.send('Number must be between 1 - 21600')

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        const embed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle(`Slow Mode set to ${args[0]}`); 
        message.channel.send(embed)
        return;

    message.channel.send(`Slow Mode set to ${args[0]}`)

    .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
    })
} 
}