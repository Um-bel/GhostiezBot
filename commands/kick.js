module.exports = {
    name: 'kick', 
    permissions: ["KICK_MEMBERS"], 
    desc: 'will kick someone from a server', 
    execute(client, message, args, cmd, Discord){

        const member = message.mentions.users.first(); 
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id); 
            memberTarger.kick(); 
        const embed = new Discord.MessageEmbed()
      .setColor('#961a5d')
      .setTitle(`${member}has been banned`); 
            message.channel.send(embed); 
        } else{
            message.channel.send('you cannot kick that member :(, maybe next time'); 
        }

    } 
}