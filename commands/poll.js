module.exports = {
    name: 'poll', 
    permissions: [], 
    desc: 'dosent matter kek', 
    async execute(client, message, args, cmd, Discord) { 
        const x = 60000; 
        let pollChannel = client.channels.cache.find(channel => channel.id === '854208322751168562');


        const pollEmbed = new Discord.MessageEmbed()
        .setTitle('!!! New poll !!!'); 

        
        await message.channel.send('what do you want 🔵 to be?'); 
        const firstPoll = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]}); 
        await pollEmbed.addField({name: '🔵', value: firstPoll.first().content}); 

        await message.channel.send('what do you want 🔴 to be?'); 
        const secondPoll = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]}); 
        await pollEmbed.addField({ name: '🔴', value: secondPoll.first().content}); 


        await message.channel.send('is that all? send Y or N'); 
        const fstCheck = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
        if(fstCheck.first().content === 'Y') {
            await pollChannel.send(pollEmbed); 
        } else if(fstCheck.first().content === 'N') {
            await message.channel.send('what do you want 🟢 to be?'); 
            const thirdPoll = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]}); 
            await pollEmbed.addField({ name: '🟢', value: thirdPoll.first().content}); 

            await message.channel.send('is that all?')
            const sndCheck = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
            if(sndCheck.first().content === 'Y') {
                pollChannel.send(pollEmbed); 
            }else if(sndCheck.first().content === 'N') {
                await message.channel.send('what do you want 🟣 to be?'); 
                const forthPoll = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
                await pollEmbed.addField({ name: '🟣', value: forthPoll.first().content});
                
                await message.channel.send('is that all?'); 
                const thrdCheck = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
                    if(thrdCheck.first().content === 'Y') {
                        pollChannel.send(pollEmbed); 
                    }else if(thrdCheck.first().content === 'N') {
                        await message.channel.send('what do you want 🟠 to be');
                        const fifthPoll = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
                        await pollEmbed.addField({ name: '🟠', value: fifthPoll.first().content});

                        await message.channel.send('is that all?'); 
                        const fthCheck = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
                            if(fthCheck.first().content === 'Y') {
                                pollChannel.send(pollEmbed); 
                            }else if(fthCheck.first().content === 'N') {
                                await message.channel.send('what do you want 🟡 to be (final)'); 
                                const sixthPoll = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
                                await pollEmbed.addField({ name: '🟡', value: sixthPoll.first().content}); 
                            }
                }
            }
        }
    } 
}