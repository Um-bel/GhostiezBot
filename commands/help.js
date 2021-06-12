module.exports = {
    name: 'help', 
    permissions: ["SEND_MESSAGES"], 
    desc: 'this will tell you the commands the bot has to offer', 
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle('use on of these commands for commands')
        .addFields(
            {name: '>avatar', value: 'will get a users avatar', inline: true}, 
            {name: '>ban', value: 'will ban someone', inline: true}, 
            {name: '>bugreport', value: 'will report a bug', inline: true}, 
            {name: '>clear', value: 'will mass delete messages', inline: true}, 
            {name: '>image', value: 'will get an image off the internet', inline: true}, 
            {name: '>invite', value: 'will get the bots invite link', inline: true}, 
            {name: '>kick', value: 'will kick a user', inline: true}, 
            {name: '>math', value: 'will solve a math problem', inline: true}, 
            {name: '>meme', value: 'will get a random meme', inline: true}, 
            {name: '>play', value: 'will play some music', inline: true}, 
            {name: '>rps', value: 'will play a game of rock, paper, scissors', inline: true}, 
            {name: '>say', value: 'will say something to a specified text channel', inline: true}, 
            {name: '>serverinfo', value: 'will get the servers information', inline: true}, 
            {name: '>slowmode', value: 'will enable slowmode on the text channel', inline: true}, 
            {name: '>spotify', value: 'will get information on music someone is listening to', inline: true}, 
            {name: '>weather', value: 'will get the weather', inline: true}, 
        )
        message.channel.send(newEmbed); 

    }
}
    


//this works fine. 
