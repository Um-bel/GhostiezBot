module.exports = {
    name: 'unmute', 
    permissions: ["KICK_MEMBERS"], 
    desc: 'will unmute a user', 
    execute(client, message, args, cmd, Discord){

        const target = message.mentions.users.first(); 
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Online'); 
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted'); 

            let memberTarget = message.guild.members.cache.get(target.id); 

            memberTarget.roles.remove(muteRole.id); 
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`${memberTarget.user} has been unmuted`)
        } else {
            message.channel.send('apologies, i cant find someone under that name :/'); 
        }

} 
}
//if the mute command works, this should too