const { execute } = require("./say");

module.exports = {
    name: "bugreport",
    aliases: ['bug', 'reportbug'],
    permissions: ["SEND_MESSAGES"], 
    description: 'let users report bugs',
    execute(client, message, args, cmd, Discord){
        
        const channel = message.guild.channels.cache.find(channel => channel.name == 'bugreport'); 

        if(!channel) message.guild.channels.create('bugreport') + message.channel.send("i couldnt find a bugreport channel, so i've made a new one! please report your bug again."); 

        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug') 

        
        const reportEmbed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);

        client.users.fetch('804829914963378216').then(user => {
            user.send(reportEmbed)
        })


        const replyEmbed = new Discord.MessageEmbed()
        .setColor(`#961a5d`)
        .setTitle(`bug has been reported to the server!`)
        .setFooter(`Umbel has also been notified`); 
    
        message.channel.send(replyEmbed)
    }
}
//this should work, just make sure you have a "bugreport" channel