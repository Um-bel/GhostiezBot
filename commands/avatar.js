const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    permissions: ["SEND_MESSAGES"], 
    aliases: ['icon', 'pfp', 'profilepic', 'av'],
    description: "Displays users avatar",
     async execute (client, message, args, cmd, Discord, profileData) {
         const user = message.mentions.users.first() || message.author;
         message.channel.send(
            new Discord.MessageEmbed()
            .setFooter(`${user.tag}'s avatar!`)
            .setColor("#961a5d")
            .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))

         )
         
            }
}

//this should work fine, if you have a gif as a pfp it might break, but it shouldn't. 


