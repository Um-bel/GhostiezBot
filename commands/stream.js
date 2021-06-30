module.exports = {
    name: 'stream', 
    permissions: [], 
    desc: 'dosent matter kek', 
    async execute(client, message, args, cmd, Discord) {

        if(message.author.id === '804829914963378216') {
            return message.channel.send('command is working')
        }

        if(message.author.id !== '310582337119453185') {
            return message.channel.send('only ghostie can use this command')
        }

        let ghostie = message.author;

        let status = ghostie.presence.activities[0]; 
        if(status.type !== 'STREAMING') {
            status = ghostie.presence.activities[1]; 
            if(status !== "STREAMING") {
                status = ghostie.presence.activities[2]; 
            } else {
                status = ghostie.presence.activities[1]; 
            }
        } else {
            status = ghostie.presence.activities[0]; 
        }

        //this is horrible. maybe do "ghostie.presence.find"?


        if(status.type !== "STREAMING") {
            message.channel.send('you are not streaming right now')
        }

        const twitchE = 'https://pngimg.com/uploads/twitch/twitch_PNG27.png'; 
        const ghostiezFace = 'https://images-ext-2.discordapp.net/external/yyL17GXmzrLBRoXW1A_O1EfpM_kPo00j3uRUUOxXWSo/https/static-cdn.jtvnw.net/jtv_user_pictures/13aae65e-71d6-44ba-80f5-9d71dda54fc8-profile_image-300x300.png?width=80&height=80'; 


        const notifEmbed = new Discord.MessageEmbed()
        .setAuthor('Twitch', twitchE)
        .setColor('GREEN')
        .setTitle(`${member.displayName} is streaming ${status.state}! `)
        .setDescription(status.details)
        .setURL(status.url || 'https://www.twitch.tv/anthonytookit')
        .setThumbnail(ghostiezFace); 


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
    }
}