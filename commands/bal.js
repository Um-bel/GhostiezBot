module.exports = {
    name: 'bal', 
    permissions: [], 
    desc: 'gets users balence', 
    execute(client, message, args, cmd, Discord, profileData) {
        const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${message.author.tag}'s balence`)
        .addFields(
            {name: 'overall balence', value: profileData.pellets + profileData.bank}, 
            {name: 'wallets balence', value: profileData.pellets, inline: true}, 
            {name: 'banks balence', value: profileData.bank, inline: true},
        ); 

        message.channel.send(embed); 
    }
}