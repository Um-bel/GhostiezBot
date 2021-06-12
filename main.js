const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]}); 
require('dotenv').config();
require('discord-buttons')(client); 
const { MessageButton, MessageActionRow } = require('discord-buttons'); 


client.commands = new Discord.Collection(); 
client.events = new Discord.Collection(); 

['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord); 
}); 




client.on('presenceUpdate', async (oldPresence, newPresence) => {
    let member = newPresence.member;
    const status = newPresence.activities[0];
    const notifChannel = await client.channels.cache.get('851886867677970474'); 

    if(!notifChannel) {
        console.log('couldnt find the notif channel')
    }

    if(member.id === '804829914963378216') {
        if(status === (null || undefined) || status.type === (null || undefined)) {
            return; //error handling
        }

        if(status !== null && status.type === "PLAYING") {
            const twitchE = client.emojis.cache.find(emoji => emoji.name === 'black1'); 
            const ghostiezFace = 'https://images-ext-2.discordapp.net/external/yyL17GXmzrLBRoXW1A_O1EfpM_kPo00j3uRUUOxXWSo/https/static-cdn.jtvnw.net/jtv_user_pictures/13aae65e-71d6-44ba-80f5-9d71dda54fc8-profile_image-300x300.png?width=80&height=80'; 
    

            const notifEmbed = new Discord.MessageEmbed()
            .setAuthor('Twitch', twitchE)
            .setColor('GREEN')
            .setTitle(`${member.displayName} is streaming ${status.name}! `)
            // .setDescription(status.assets.smallText)
            .setURL(status.url || 'https://www.twitch.tv/anthonytookit')
            .setThumbnail(ghostiezFace)
            .setImage(status.assets.largeImageURL || status.assets.smallImageURL); 



            const twitchBtn = new MessageButton()
            .setStyle("url")
            .setLabel("Twitch")
            .setURL('https://www.twitch.tv/anthonytookit');
        
            const twitterBtn = new MessageButton()
            .setStyle('url')
            .setLabel("Twitter")
            .setURL('https://twitter.com/AnthonyTookIt');

            const donateBtn = new MessageButton()
            .setStyle('url')
            .setLabel("Donate")
            .setURL('https://streamlabs.com/ghostiez1');
            
            const btnRow = new MessageActionRow()
            .addComponent(twitchBtn)
            .addComponent(twitterBtn)
            .addComponent(donateBtn);

            

            await notifChannel.send('@everyone!', {
                embed: notifEmbed, 
                component: btnRow,
            }); 
            await console.log(status); 
        }
    } else {
        return; //more error handling, i think that's all
    }
});






client.login(process.env.TOKEN); 