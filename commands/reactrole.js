module.exports = {
    name: 'reactrole', 
    permissions: [], 
    desc: 'reaction role command', 
    async execute(client, message, args, cmd, Discord) {
        if(message.author.id !== '804829914963378216') {
            return; 
        }
        const channel = '854385910375645225'; 

        await message.delete(); 

        const yellowRole = message.guild.roles.cache.find(role => role.id === '854387020398723084'); 
        const blueRole = message.guild.roles.cache.find(role => role.id === '854387056624140288'); 

        const blue = '🔵'; 
        const yellow = '🟡'; 

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Choose a role!')
        .setDescription('\n\n'
            + `${blue} for blue role\n`
            + `${yellow} for yellow role`); 

        
        let messageEmbed = await message.channel.send(embed); 
        await messageEmbed.react(blue); 
        await messageEmbed.react(yellow); 

        client.on('messageReactionAdd', async (reaction, user)=> {
            if(reaction.message.partial) await reaction.message.fetch(); 
            if(reaction.partial) await reaction.fetch(); 
            if(user.bot) return; 
            if(!reaction.message.guild) return; 

            if(reaction.message.channel.id === channel) {
                if(reaction.emoji.name === yellow) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowRole); 
                }else if(reaction.emoji.name === blue) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole); 
                }
            } else {
                return; 
            }
        }); 

        client.on('messageReactionRemove', async (reaction, user)=> {
            if(reaction.message.partial) await reaction.message.fetch(); 
            if(reaction.partial) await reaction.fetch(); 
            if(user.bot) return; 
            if(!reaction.message.guild) return; 

            if(reaction.message.channel.id === channel) {
                if(reaction.emoji.name === yellow) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowRole); 
                }else if(reaction.emoji.name === blue) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole); 
                }
            } else {
                return; 
            }
        });
    }
}