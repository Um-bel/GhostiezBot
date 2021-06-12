module.exports = {
    name: 'suggest', 
    permissions: ["SEND_MESSAGES"], 
    desc: 'will message a suggestion to me, for coding or something else', 
    execute(client, message, args, cmd, Discord){
        const channel = message.guild.channels.cache.find(c => c.name == 'suggestions'); 
        if(!channel) return message.channel.send('you need a text channel called "suggestions"'); 

        let messageArgs = args.join(' '); 

        const embed = new Discord.MessageEmbed()
            .setColor('#961a5d')
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(messageArgs); 

            channel.send(embed).then((msg) =>{
                msg.react('✅'); 
                msg.react('❌'); 
                message.delete(); 
            }).catch ((error) =>{
                console.log(error); 
            })
    }
}
//this works fine, but i should make it more of a poll, or make a seperate poll command