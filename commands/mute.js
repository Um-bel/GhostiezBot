module.exports = {
    name: 'mute', 
    permissions: ["KICK_MEMBERS"], 
    desc: 'will mute a player from talking, without removing them from the server', 
    execute(client, message, args, cmd, Discord){
        const target = message.mentions.users.first(); 
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Online'); 
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted'); 

            let memberTarget = message.guild.members.cache.get(target.id); 

            memberTarget.roles.remove(mainRole.id); 
            memberTarget.roles.add(muteRole.id); 

            const embed = new Discord.MessageEmbed()
            .setColor('#961a5d')
            .setTitle(`${memberTarget.user} has been muted`); 
            message.channel.send(embed);
        } else {
            message.channel.send('apologies, i cant find someone under that name, or they are already muted.'); 
        }
    } 
    
}


//this works fine, but you need an "Online" role and a "Muted" role...
//... i will hard code it to make an Online role and Muted role automatically if there isnt already one. but for now just make a Online and Muted role. 