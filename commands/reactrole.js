module.exports = {
    name: 'reactrole', 
    permissions: [], 
    desc: 'reaction role command', 
    async execute(client, message, args, cmd, Discord) {
        if(message.author.id !== '804829914963378216') {
            return; 
        }
        const channel = '854381518998208552'; 

        await message.delete(); 

        const yellowRole = message.guild.roles.cache.find(role => role.id === '854382832859217950'); 
        const blueRole = message.guild.roles.cache.find(role => role.id === '854381244150317076'); 
        const pinkRole = message.guild.roles.cache.find(role => role.id === '854381605052743721'); 
        const greenRole = message.guild.roles.cache.find(role => role.id === '854382162862407730'); 
        const purpleRole = message.guild.roles.cache.find(role => role.id === '851321473796931615'); 

        const minecraftRole = message.guild.roles.cache.find(role => role.id === '855133585991270463'); 
        const leagueRole = message.guild.roles.cache.find(role => role.id === '855133115659190303'); 
        const apexRole = message.guild.roles.cache.find(role => role.id === '855133904092135464'); 
        const wowRole = message.guild.roles.cache.find(role => role.id === '855134063021916160'); 
        const overwatchRole = message.guild.roles.cache.find(role => role.id === '855134259386777661'); 
        const susRole = message.guild.roles.cache.find(role => role.id === "858395834487668796"); 

        const NSFWrole = message.guild.roles.cache.find(role => role.id === '858154052202397727'); 
        const twitchRole = message.guild.roles.cache.find(role => role.id === '858154422358376498'); 
        const mostUsedSocialRole = message.guild.roles.cache.find(role => role.id === '858192822696017970'); 


        const blue = '🥶'; 
        const yellow = '🍦'; 
        const pink = '🍑'; 
        const green = '🥬'; 
        const purple = '🍇'; 

        const minecraft = '<:minecraft:857100613712216074>';
        const league = '<:leagueOfLegends:857119147606540308>';
        const apex = '<:apex:857119834055507990>';
        const overwatch = '<:overwatch:857121748864598045>';
        const wow = '<:wow:857121371862466560>';
        const sus = '<:sus:859675857198907432>'; 

        const twitch = '<:twitch:858192355710468126>'; 
        const NSFW = '😋'; 
        const mostUsedSocial = '<:twitter:858192235702779914>'; 


        const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Choose a color role!')
        .setDescription('\n\n'
            + `${blue} ➤ ${blueRole}\n\n`
            + `${yellow} ➤ ${yellowRole}\n\n`
            + `${pink} ➤ ${pinkRole}\n\n`
            + `${green} ➤ ${greenRole}\n\n`
            + `${purple} ➤ ${purpleRole}\n` 
        );

        const gameEmbed = new Discord.MessageEmbed()
        .setColor('GREEN') 
        .setTitle('Choose some game roles!')
        .setDescription('\n\n'
            + `${minecraft} ➤ ${minecraftRole}\n\n`
            + `${league} ➤ ${leagueRole}\n\n`
            + `${apex} ➤ ${apexRole}\n\n` 
            + `${wow} ➤ ${wowRole}\n\n`
            + `${overwatch} ➤ ${overwatchRole}\n\n`
            + `${sus} ➤ ${susRole}`
        );

        const OtherEmbed = new Discord.MessageEmbed()
        .setTitle('Pick some other roles!')
        .setDescription('\n\n'
            + `${NSFW} ➤ ${NSFWrole}\n\n`
            + `${twitch} ➤ ${twitchRole}\n\n`
            + `${mostUsedSocial} ➤ ${mostUsedSocialRole}\n\n`
            ); 

        
        let messageEmbed = await message.channel.send(embed); 
        await messageEmbed.react(blue); 
        await messageEmbed.react(yellow); 
        await messageEmbed.react(pink); 
        await messageEmbed.react(green); 
        await messageEmbed.react(purple); 

        let messageEmbed1 = await message.channel.send(gameEmbed); 
        await messageEmbed1.react(minecraft); 
        await messageEmbed1.react(league); 
        await messageEmbed1.react(apex); 
        await messageEmbed1.react(wow); 
        await messageEmbed1.react(overwatch);
        await messageEmbed1.react(sus); 

        let messageEmbed2 = await message.channel.send(OtherEmbed); 
        await messageEmbed2.react(NSFW); 
        await messageEmbed2.react(twitch); 
        await messageEmbed2.react(mostUsedSocial);

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
                }else if(reaction.emoji.name === pink) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pinkRole); 
                }else if(reaction.emoji.name === green) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenRole); 
                }else if(reaction.emoji.name === purple) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleRole); 
                }else if(reaction.emoji.id === '857100613712216074') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftRole); 
                }else if(reaction.emoji.id === '857119147606540308') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(leagueRole); 
                }else if(reaction.emoji.id === '857119834055507990') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apexRole); 
                }else if(reaction.emoji.id === '857121371862466560') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(wowRole); 
                }else if(reaction.emoji.id === '857121748864598045') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(overwatchRole); 
                }else if(reaction.emoji.name === NSFW) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(NSFWrole); 
                }else if(reaction.emoji.id === '858192355710468126') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(twitchRole); 
                }else if(reaction.emoji.id === '858192235702779914') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mostUsedSocialRole); 
                }else if(reaction.emoji.id === '859675857198907432') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(susRole)
                }
            } else {
                return; 
            }
        }); 

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch(); 
            if(reaction.partial) await reaction.fetch(); 
            if(user.bot) return; 
            if(!reaction.message.guild) return; 

            if(reaction.message.channel.id === channel) {
                if(reaction.emoji.name === yellow) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowRole); 
                }else if(reaction.emoji.name === blue) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole); 
                }else if(reaction.emoji.name === pink) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pinkRole); 
                }else if(reaction.emoji.name === green) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenRole); 
                }else if(reaction.emoji.name === purple) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleRole); 
                }else if(reaction.emoji.id === '857100613712216074') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftRole); 
                }else if(reaction.emoji.id === '857119147606540308') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(leagueRole); 
                }else if(reaction.emoji.id === '857119834055507990') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apexRole); 
                }else if(reaction.emoji.id === '857121371862466560') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(wowRole); 
                }else if(reaction.emoji.id === '857121748864598045') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(overwatchRole); 
                }else if(reaction.emoji.name === NSFW) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(NSFWrole); 
                }else if(reaction.emoji.id === '858192355710468126') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(twitchRole); 
                }else if(reaction.emoji.id === '858192235702779914') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mostUsedSocialRole); 
                }else if(reaction.emoji.id === '859675857198907432') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(susRole)
                }
            } else {
                return; 
            }
        });
    }
}